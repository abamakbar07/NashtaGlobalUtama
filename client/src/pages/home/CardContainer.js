import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardContainer = (props) => {
   const data = props.data

   return (
      <div className="CardContainer">
         <Card style={{ width: "240px" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
               <div className="title Location">{data.location}</div>
               <div className="title Title">{data.title}</div>
               <div className="title Date">{data.date}</div>
               <div className="desc Participant">{data.participant}</div>
               <div className="desc Note">{data.note}</div>
               <Button variant="primary">Go somewhere</Button>
            </Card.Body>
         </Card>
      </div>
   );
}

export default CardContainer
