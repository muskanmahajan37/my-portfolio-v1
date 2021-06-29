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
        <Container id="contact">
            <div>
                <h2 className="text-center" style={{ color: "#216869", fontWeight: "700" }}>Contact me</h2>
                <div className="contact-wrapper">
                    <form noValidate validated={validated} onSubmit={handleSubmit}>
                        <div className="form-wrapper">
                            <div className="form-left">
                                <div className="form-align mb-3">
                                    <label for="name" className="form-text label">Name</label>
                                    <input type="text" id="name" name="name" required />
                                </div>
                                <div className="form-align mb-3">
                                    <label for="email" className="form-text label">Email</label>
                                    <input type="email" id="email" name="email" required />
                                </div>
                            </div>
                            <div className="form-align form-right mb-3">
                                <label for="textarea" className="form-text label">Message</label>
                                <textarea name="textarea" id="textarea" cols="30" rows="10" required></textarea>
                            </div>

                        </div>
                        <div>
                            <Button type="submit" id="button">Submit form</Button>
                        </div>
                    </form>
                </div>
            </div>
        </Container >
    )
}
