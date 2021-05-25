import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ReactPaginate from 'react-paginate';
import { Table } from 'react-bootstrap';
import { API } from '../../config/api';

const Tablepagination = () => {
   const [refresh, setRefresh] = useState(0)
   const [state, setState] = useState({
      offset: 0,
      tableData: [],
      orgtableData: [],
      perPage: 5,
      currentPage: 0,
   });

   const handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * state.perPage;

      setState({
         ...state,
         currentPage: selectedPage,
         offset: offset,
         }
      )

      setRefresh(refresh+1)
   };

   const loadMoreData = () => {
		const data = state.orgtableData;
		
		const slice = data.slice(state.offset, state.offset + state.perPage)

		setState({
         ...state,
			pageCount: Math.ceil(data.length / state.perPage),
			tableData: slice
		})
   }

   useEffect(() => loadMoreData(), [refresh])

   useEffect(() => {
      API.get(`/tasks`).then((res) => {
        var data = res.data;

        var slice = data.slice(state.offset, state.offset + state.perPage);

        setState({
          ...state,
          pageCount: Math.ceil(data.length / state.perPage),
          orgtableData: res.data,
          tableData: slice,
        });
      });
   }, [])

   return (
      <Table striped bordered hover>
         <h1>Welcome to GKTechy!</h1>

         <table>
            <thead>
               <th>No</th>
               <th>Title</th>
               <th>Location</th>
               <th>Date</th>
               <th>Participant</th>
               <th>Note</th>
            </thead>
            <tbody>
            {state.tableData.map((tdata, index) => (
               <tr key={tdata._id}>
                  <td>{index + (state.offset + 1)}</td>
                  <td>{tdata.title}</td>
                  <td>{tdata.location}</td>
                  <td>{tdata.date}</td>
                  <td>{tdata.participant}</td>
                  <td>{tdata.note}</td>
               </tr>
            ))}
            </tbody>
         </table>

         <ReactPaginate
            previousLabel={"prev"}
            nextLabel={"next"}
            breakLabel={"..."}
            breakClassName={"break-me"}
            pageCount={state.pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={10}
            onPageChange={(e) => handlePageClick(e)}
            containerClassName={"pagination"}
            subContainerClassName={"pages pagination"}
            activeClassName={"active"}
         />
      </Table>
   );
}

export default Tablepagination
