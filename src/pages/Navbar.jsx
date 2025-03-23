import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Navbar.css';

function NavigationBar() {
    const [expanded, setExpanded] = useState(false);

    const closeMenu = () => setExpanded(false);

    return (
        <Navbar 
            expand="sm" 
            className="fixed-navbar"
            expanded={expanded}
            onToggle={() => setExpanded(!expanded)}
        >
            <Container className="nav-container">
                <Navbar.Toggle aria-controls="navbar-nav">
                    <i className="bi bi-grid"></i>
                </Navbar.Toggle>
                <Navbar.Collapse id="navbar-nav" className="justify-content-center">
                    <Nav>
                        <NavLink 
                            to="/" 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                            end
                        >
                            <i className="bi bi-journal-text"></i>
                            Todos                     </NavLink>
                       
                        <NavLink 
                            to="/social" 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <i className="bi bi-people-fill"></i>
                            Social
                        </NavLink>
                        <NavLink 
                            to="/familia" 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <i className="bi bi-house-heart-fill"></i>
                            Familia
                        </NavLink>
                        <NavLink 
                            to="/trabajo" 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <i className="bi bi-briefcase-fill"></i>
                            Trabajo
                        </NavLink>
                        <NavLink 
                            to="/create" 
                            className={({isActive}) => 
                                `nav-link d-flex align-items-center justify-content-center ${isActive ? 'active' : ''}`
                            }
                            onClick={closeMenu}
                        >
                            <i className="bi bi-person-plus-fill"></i>
                            Crear Contacto
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavigationBar;