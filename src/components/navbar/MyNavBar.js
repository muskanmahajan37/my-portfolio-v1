import React, { useState, useEffect } from 'react'; 
import { debounce } from '../../utilities/helpers';

import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar } from 'react-bootstrap'
import './MyNavBar.css'

const MyNavbar = () => {

    return (
        <Navbar className="nav-bg" variant="dark" expand="lg">
            <Container className="justify-content-between" >
                <Navbar.Brand href="#">Christian Lumapay</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="mr-auto my-2 my-lg-0 mx-3 justify-content-end"
                        style={{ maxHeight: '120px' }}
                        navbarScroll
                    >
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#action2">Project</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default MyNavbar;