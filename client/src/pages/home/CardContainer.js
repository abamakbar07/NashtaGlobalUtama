import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardContainer = (props) => {
   const data = props.data
   const participants = data.participant.split(",")

   return (
     <div className="CardContainer">
       <Card style={{ width: "240px" }}>
         <Card.Img variant="top" src={`http://localhost:5000/tasks/${data.picture}`} />
         <Card.Body>
           <div className="title Location">{data.location}</div>
           <div className="title Title">{data.title}</div>
           <div className="title Date">{data.date}</div>
           <div className="desc Participant d-flex">
             {participants.map((participant) => (
               <div className="bg-dark text-white m-1 p-1">{participant}</div>
             ))}
           </div>
           <div className="desc Note">{data.note}</div>
           <Button variant="primary">Go somewhere</Button>
         </Card.Body>
       </Card>
     </div>
   );
}

export default CardContainer
