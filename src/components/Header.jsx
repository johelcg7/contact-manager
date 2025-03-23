import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Header.css';

function Header() {
  return (
    <header className="app-header">
      <Container fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1>
              <i className="bi bi-person-lines-fill me-2"></i>
              Contact Manager
            </h1>
          </Col>
          <Col xs={12} md={6} className="d-none d-md-block text-end">
            <p>
              <i className="bi bi-shield-check me-2"></i>
              Sistema de Gestión de Contactos Profesional
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;