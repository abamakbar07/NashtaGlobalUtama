import React, { useState } from 'react'
import { Card, Col, Row, Form, Button } from 'react-bootstrap';

const FormAddEvent = () => {
   const [form, setForm] = useState({})
   const [errors, setErrors] = useState({});

   const setField = (field, value) => {
      setForm({
         ...form,
         [field]: value,
      });
      if (!!errors[field])
        setErrors({
          ...errors,
          [field]: null,
        });
   };

   const findFormErrors = () => {
     const { title, location, date, participant, note } = form;
     const newErrors = {};
     
     if (!title || title === "") newErrors.title = "cannot be blank!";

     if (!location || location === "") newErrors.location = "cannot be blank!";

     if (!date || date === "") newErrors.date = "select a date!";

     if (!participant || participant === "") newErrors.participant = "select a participant!";

     if (!note || note === "") newErrors.note = "cannot be blank!";
     else if (note.length < 50) newErrors.note = "note is too short!";

     return newErrors;
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const newErrors = findFormErrors();
      if (Object.keys(newErrors).length > 0) {
         setErrors(newErrors);
      } else {
         alert("Thank you for your feedback!");
      }
   };
   

   return (
     <div className="FormAddEvent">
       <Row className="justify-content-center p-0 m-0 pt-5">
         <Card style={{ width: "50rem" }}>
           <Row>
             <Col className="bg-light" md={6}>
               <div className="text-left">+ Add Event</div>
               <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group as={Row}>
                     <Col>
                        <Form.Control
                        type="text"
                        placeholder="Title"
                        onChange={(e) => setField("title", e.target.value)}
                        isInvalid={!!errors.title}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.title}
                        </Form.Control.Feedback>
                     </Col>
                     <Col>
                        <Form.Control
                        type="text"
                        placeholder="Location"
                        onChange={(e) => setField("location", e.target.value)}
                        isInvalid={!!errors.location}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.location}
                        </Form.Control.Feedback>
                     </Col>
                  </Form.Group>
                  <Form.Group as={Row}>
                     <Col>
                        <Form.Control
                        type="text"
                        placeholder="Participant"
                        onChange={(e) => setField("participant", e.target.value)}
                        isInvalid={!!errors.participant}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.participant}
                        </Form.Control.Feedback>
                     </Col>
                     <Col>
                        <Form.Control
                        type="date"
                        placeholder="Date"
                        onChange={(e) => setField("date", e.target.value)}
                        isInvalid={!!errors.date}
                        />
                        <Form.Control.Feedback type="invalid">
                        {errors.date}
                        </Form.Control.Feedback>
                     </Col>
                  </Form.Group>
                  <Form.Group>
                     <Form.Control
                        as="textarea"
                        placeholder="Note"
                        rows={3}
                        onChange={(e) => setField("note", e.target.value)}
                        isInvalid={!!errors.note}
                     />
                     <Form.Control.Feedback type="invalid">
                        {errors.note}
                     </Form.Control.Feedback>
                  </Form.Group>

                 <Button variant="primary" type="submit">
                   Submit
                 </Button>
               </Form>
             </Col>
             <Col className="bg-primary" md={6}>

             </Col>
           </Row>
         </Card>
       </Row>
     </div>
   );
}

export default FormAddEvent
