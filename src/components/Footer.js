import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './comp.css'; // Assume you have a Footer.css file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col md={3}>
            <h5>SERVICES</h5>
            <ul>
              <li>Identity Management</li>
              <li>Cloud Services</li>
              <li>Product Development</li>
              <li>Workplace Solutions</li>
              <li>Training and Certifications</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>PRODUCTS</h5>
            <ul>
              <li>iSeeNowLive</li>
              <li>iDBSecure</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>COMPANY</h5>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col md={3}>
            <h5>CORPORATE OFFICE</h5>
            <ul className="contact-details">
              <li> 800 N King Street Suite 304 1284 Wilmington, DE 1980</li>
              <li> PHONE NUMBER HERE</li>
              <li>contact@vivere-global.com</li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            © Vivere Global 2024. All Rights Reserved
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
