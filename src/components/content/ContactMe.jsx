import React, { useState } from 'react'
import { Container, Form, InputGroup, Button, Col, Row } from 'react-bootstrap'
import './contactme.css'

export default function ContactMe() {
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        setValidated(true);
    };

    return (
        <Container>
            <div>
                <h2 className="text-center" style={{ color: "#79A8AF" }}>Contact me</h2>
                <div className="contact-wrapper">
                    <Form noValidate validated={validated} onSubmit={handleSubmit}>
                        <Row className="mb-3">
                            <Col lg={12} md={12}>
                                <Form.Group className="mb-3" as={Col} controlId="validationCustom01">
                                    <Form.Label className="form-text">Name</Form.Label>
                                    <Form.Control
                                        required
                                        type="text"
                                        placeholder="Christian Lumapay"
                                        defaultValue=""
                                    />
                                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                                </Form.Group>
                            </Col>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustom02">
                                <Form.Label className="form-text">Email</Form.Label>
                                <Form.Control
                                    required
                                    type="email"
                                    placeholder="your-email@email.com"
                                    defaultValue=""
                                />
                                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group className="mb-3" as={Col} md="12" controlId="validationCustomUsername">
                                <Form.Label className="form-text">Message</Form.Label>
                                <InputGroup hasValidation>
                                    <Form.Control
                                        required
                                        as="textarea"
                                        placeholder="Leave a comment here"
                                        style={{ height: '100px' }}
                                    />
                                    <Form.Control.Feedback type="invalid">
                                        Please don't forget the message.
                                    </Form.Control.Feedback>
                                </InputGroup>
                            </Form.Group>
                        </Row>
                        <Form.Group className="mb-4">
                            <Form.Check
                                required
                                label="You must check before submitting"
                                feedback="You must check before submitting"
                            />
                        </Form.Group>
                        <Button type="submit">Submit form</Button>
                    </Form>
                </div>
            </div>
        </Container>
    )
}
