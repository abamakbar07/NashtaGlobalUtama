import React, { useState, useEffect } from 'react'
import { API } from '../../config/api';
import CardContainer from './CardContainer';

const Home = () => {
   const [data, setData] = useState([])

   useEffect(() => {
      API.get(`/tasks`).then((res) => {
         setData(
            res.data
         );
      });
   }, []);

   return (
      <div className="Home bg-danger">
         <div className="pt-5 d-flex" style={{overflowX: "scroll"}}>
            {data.map(content => (
               <CardContainer data={content} />
            ))}
         </div>
      </div>
   );
}

export default Home
