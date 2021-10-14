import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const AppNavbar = () => {
    return(
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="/">Home</Navbar.Brand>
                    <Nav className="me-auto">
                    <Nav.Link href="memo">Memo</Nav.Link>
                    <Nav.Link href="game">Game</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;