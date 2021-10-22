import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="md">
            <Container>
                <Navbar.Brand href="/react-playground/#/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/react-playground/#/memo">Memo</Nav.Link>
                        <Nav.Link href="/react-playground/#/calculator">Calculator</Nav.Link>
                        <Nav.Link href="/react-playground/#/game">Game</Nav.Link>
                    </Nav>
                    <div style={{color: "white"}}>Hi </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;