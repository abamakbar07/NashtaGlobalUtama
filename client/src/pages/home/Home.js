import React from 'react'
import { Card, Row, Button } from 'react-bootstrap'

const Home = () => {
   const data = [
      {
         title: "Task pertama",
         alamat: "Disini"
      },
      {
         title: "Task kedua",
         alamat: "Disana"
      },
      {
         title: "Task ketiga",
         alamat: "Disitu"
      },
   ]

   return (
      <div className="Home bg-danger">
         <div className="pt-5 d-flex" style={{overflowX: "scroll"}}>
            {data.map(content => (
               <div className="CardContainer">
                  <Card style={{ width: "240px" }}>
                     <Card.Img variant="top" src="holder.js/100px180" />
                     <Card.Body>
                        <Card.Title>{content.title}</Card.Title>
                        <Card.Text>
                           {content.alamat}
                        </Card.Text>
                        <Button variant="primary">Go somewhere</Button>
                     </Card.Body>
                  </Card>
               </div>
            ))}
         </div>
      </div>
   );
}

export default Home
