import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css'; // Importa el archivo CSS para estilos personalizados

function NavigationBar() {
    return (
        <Navbar bg="primary" variant="dark" expand="sm" className="mb-3 fixed-navbar">
            <Container>
                <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbar-nav" />
                <Navbar.Collapse id="navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/" className="nav-link">
                            Agenda
                        </NavLink>
                        <NavLink to="/create" className="nav-link">
                            Crear
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;