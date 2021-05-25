import React from 'react'
import { Card, Button } from 'react-bootstrap';

const CardContainer = (props) => {
   return (
      <div className="CardContainer">
         <Card style={{ width: "240px" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.address}</Card.Text>
               <Button variant="primary">Go somewhere</Button>
            </Card.Body>
         </Card>
      </div>
   );
}

export default CardContainer
