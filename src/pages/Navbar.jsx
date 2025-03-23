import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => setExpanded(false);

    return (
        <Navbar 
            bg="primary" 
            variant="dark" 
            expand="sm" 
            className="mb-3 fixed-navbar"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container>
                <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink 
                            to="/" 
                            className="nav-link" 
                            onClick={closeMenu}
                            end
                        >
                            Agenda
                        </NavLink>
                        <NavLink 
                            to="/create" 
                            className="nav-link"
                            onClick={closeMenu}
                        >
                            Crear
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;