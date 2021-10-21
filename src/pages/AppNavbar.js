import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/react-playground/#/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="/react-playground/#/memo">Memo</Nav.Link>
                    <Nav.Link href="/react-playground/#/calculator">Calculator</Nav.Link>
                    <Nav.Link href="/react-playground/#/game">Game</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;