import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

function NavigationBar() {
    return (
        <Navbar bg="light" expand="lg">
            
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <NavLink to="/" exact className="nav-link" activeClassName="active">
                        Agenda de Contactos
                    </NavLink>
                    <NavLink to="/create" className="nav-link" activeClassName="active">
                        Crear Contacto
                    </NavLink>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default NavigationBar;