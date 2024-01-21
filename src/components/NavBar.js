import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import logo from '../assest/logo.png'; // Ensure the path to your logo is correct
import './comp.css'; // Ensure this path is correct

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" className="mb-3">
      <Container style={{ marginLeft: 0 }}>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            height="50"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link className="nav_font" href="#home">Home</Nav.Link>
            <Nav.Link className="nav_font" href="#services">Services</Nav.Link>
            <Nav.Link className="nav_font" href="#about">About Us</Nav.Link>
            <Nav.Link className="nav_font" href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
