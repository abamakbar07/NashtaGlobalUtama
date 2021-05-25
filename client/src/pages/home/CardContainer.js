import React from 'react'
import { Card } from 'react-bootstrap';

const CardContainer = (props) => {
   const data = props.data
   const participants = data.participant.split(",")
   const date = new Date(props.data.date)

   return (
     <div className="CardContainer">
       <Card>
         <Card.Img
           variant="top"
           src={`http://localhost:5000/tasks/${data.picture}`}
         />
         <Card.Body>
           <div className="title Location d-flex align-items-center">
             <svg
               xmlns="http://www.w3.org/2000/svg"
               width="16"
               height="16"
               fill="currentColor"
               className="bi bi-geo-alt"
               viewBox="0 0 16 16"
             >
               <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z" />
               <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
             </svg>
             <div className="pl-1">{data.location}</div>
           </div>
           <div className="title Title">{data.title}</div>
           <div className="desc Date">{date.toDateString()}</div>
           <div className="desc Participant d-flex row m-0 p-0">
             {participants.map((participant) => (
               <div className="d-flex row m-0 p-2 align-items-center">
                 <svg
                   xmlns="http://www.w3.org/2000/svg"
                   width="16"
                   height="16"
                   fill="currentColor"
                   class="bi bi-person-circle"
                   viewBox="0 0 16 16"
                 >
                   <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                   <path
                     fill-rule="evenodd"
                     d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
                   />
                 </svg>
                 <div className="pl-1">{participant}</div>
               </div>
             ))}
           </div>
           <div className="desc Note pt-2 pb-2">
             <div className="">
               Note :
             </div>
             {data.note}</div>
         </Card.Body>
       </Card>
     </div>
   );
}

export default CardContainer
