import 'bootstrap/dist/css/bootstrap.css'
import { Container, Nav, Navbar } from 'react-bootstrap'

const MyNavbar = () => {
    return (

        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand href="#">Christian Lumapay</Navbar.Brand>

                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll" className="justify-content-end">
                    <Nav
                        className="mr-auto my-2 my-lg-0 justify-content-end"
                        style={{ maxHeight: '120px' }}
                        navbarScroll
                    >
                        <Nav.Link href="#action2">Home</Nav.Link>
                        <Nav.Link href="#action2">About</Nav.Link>
                        <Nav.Link href="#action2">Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container >
        </Navbar >
    )
}

export default MyNavbar;