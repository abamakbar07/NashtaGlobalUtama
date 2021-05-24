import React from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap';

const FormAddEvent = () => {
   return (
     <div className="FormAddEvent">
       <Row className="justify-content-center p-0 m-0 pt-5">
         <Card style={{ width: "50rem" }}>
           <Row>
             <Col className="bg-light" md={6}>
               <div className="text-left">+ Add Event</div>
               <Form validated>
                  <Form.Group as={Row}>
                     <Col>
                        <Form.Control placeholder="Title" />
                     </Col>
                     <Col>
                        <Form.Control placeholder="Location" />
                     </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                     <Col>
                        <Form.Control placeholder="Participant" />
                     </Col>
                     <Col>
                        <Form.Control placeholder="Date" type="date" />
                     </Col>
                  </Form.Group>
                  <Form.Group>
                     <Form.Control placeholder="Note" as="textarea" rows={3} />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                     Submit
                  </Button>
                  </Form>
             </Col>
             <Col className="bg-primary" md={6}>
               aw
             </Col>
           </Row>
         </Card>
       </Row>
     </div>
   );
}

export default FormAddEvent
