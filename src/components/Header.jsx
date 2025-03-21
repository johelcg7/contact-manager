import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

function Header() {
  return (
    <Navbar bg="dark" variant="dark" className="mb-3 py-2">
      <Container>
        <Navbar.Brand href="/">Contact Manager</Navbar.Brand>
      </Container>
    </Navbar>
  );
}

export default Header;