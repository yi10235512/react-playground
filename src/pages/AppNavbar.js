import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { useLocation, Link } from 'react-router-dom';

const AppNavbar = ({name}) => {
    const location = useLocation();
    return (
        <Navbar bg="dark" variant="dark" expand="md" activeKey={location.pathname} >
            <Container>
                <Navbar.Brand href="/react-playground/#/">Home</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/react-playground/#/memo">Memo</Nav.Link>
                        <Nav.Link href="/react-playground/#/tools">Tools</Nav.Link>
                        <Nav.Link href="/react-playground/#/game">Game</Nav.Link>
                    </Nav>
                    <div style={{color: "white"}}>Hi {name}</div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default AppNavbar;