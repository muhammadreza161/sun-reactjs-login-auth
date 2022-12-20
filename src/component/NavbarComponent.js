import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'

function NavbarComponent() {
    return (
        <div>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">SUN Frontend Developer </Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="/">Login</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent
