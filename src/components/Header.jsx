import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <Container fluid className="px-3">
        <Row className="align-items-center">
          <Col xs={12} md={6}>
            <h1 className="mb-0" style={{ fontSize: '1.8rem', fontWeight: '600' }}>
              Contact Manager
            </h1>
          </Col>
          <Col xs={12} md={6}>
            <p className="text-end mb-0 d-none d-md-block" style={{ fontSize: '1rem', opacity: '0.9' }}>
              Gestiona tus contactos de manera eficiente
            </p>
          </Col>
        </Row>
      </Container>
    </header>
  );
}

export default Header;