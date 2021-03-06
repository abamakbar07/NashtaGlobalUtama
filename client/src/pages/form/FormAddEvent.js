import React, { useState } from 'react'
import { Card, Col, Row, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from 'react-router-dom'
import { API } from '../../config/api'

const FormAddEvent = () => {
  const history = useHistory()
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
  
  const setPictureField = (field, value) => {
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
    const { title, location, date, participant, note, picture } = form;
    const newErrors = {};
    
    if (!title || title === "") newErrors.title = "cannot be blank!";

    if (!location || location === "") newErrors.location = "cannot be blank!";

    if (!date || date === "") newErrors.date = "select a date!";

    if (!participant || participant === "") newErrors.participant = "select a participant!";

    if (!note || note === "") newErrors.note = "cannot be blank!";
    else if (note.length < 50) newErrors.note = "note is too short!";

    if (!picture || picture === "") newErrors.picture = "upload picture task!";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = findFormErrors();

    const newForm = new FormData();

    newForm.append("title", form.title);
    newForm.append("location", form.location);
    newForm.append("date", form.date);
    newForm.append("participant", form.participant);
    newForm.append("note", form.note);
    newForm.append("picture", form.picture);

    const config = {
      header: {
        "Content-Type": "multipart/form-data",
      },
    };

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);

    } else {
      API.post(`/task`, newForm, config).then((res) => {
        alert(`${res.data.message}`)
        console.log(res.data)
        history.push('/')
      })
    }
  };
  

  return (
    <div className="FormAddEvent">
      <Row className="justify-content-center p-0 m-0 pt-5">
        <Card style={{ width: "50rem", border: "none" }}>
          <Row className="">
            <Col className="bg-light" md={6}>
              <Container className="pt-3">
                <div className="text-left pb-3">+ Add Event</div>
                <Form onSubmit={(e) => handleSubmit(e)}>
                  <Form.Group as={Row}>
                    <Col>
                      <Form.Control
                        name="Title"
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
                        name="Location"
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
                        name="Participant"
                        type="text"
                        placeholder="Participant"
                        onChange={(e) =>
                          setField("participant", e.target.value)
                        }
                        isInvalid={!!errors.participant}
                      />
                      <Form.Control.Feedback type="invalid">
                        {errors.participant}
                      </Form.Control.Feedback>
                    </Col>
                    <Col>
                      <Form.Control
                        name="Date"
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
                      name="Note"
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
                  <Form.Group>
                    <Form.File
                      name="Picture"
                      id="exampleFormControlFile1"
                      onChange={(e) => setPictureField("picture", e.target.files[0])}
                      isInvalid={!!errors.picture}
                      feedback={errors.picture}
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
              </Container>
            </Col>
            <Col className="bg-primary" md={6}>
              {/* {JSON.stringify(form)} */}
            </Col>
          </Row>
        </Card>
      </Row>
    </div>
  );
}

export default FormAddEvent
