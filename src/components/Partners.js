import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './comp.css';
import p1 from '../assest/1-SailPoint.webp'
import p2 from '../assest/2-okta.webp'
import p3 from '../assest/3-Delinea.webp'
import p4 from '../assest/4-SalesForce.webp'
import p5 from '../assest/5-Cyberark.webp'
import p6 from '../assest/6-OneIdentity.webp'
import p7 from '../assest/15-BeyondTrust.webp'

const PartnersSection = () => {
  const partners = [
    { id: 1, src: p1, alt: 'Partner 1' },
    { id: 2, src: p2, alt: 'Partner 2' },
    { id: 3, src: p3, alt: 'Partner 3' },
    { id: 4, src: p4, alt: 'Partner 4' },
    { id: 5, src: p5, alt: 'Partner 5' },
    { id: 6, src: p6, alt: 'Partner 6' },
    { id: 7, src: p7, alt: 'Partner 7' },

    
  ];

  return (
 <div >
    <Container className="my-5 ">
      <Row>
        <Col className="text-center mb-4">
          <h1 className='headerName'>Our Partners</h1>
        </Col>
      </Row>
      <Row className="justify-content-center">
        {partners.map((partner) => (
          <Col xs={6} md={4} lg={2} key={partner.id} className="text-center mb-3">
            <Image src={partner.src} alt={partner.alt} fluid style={{"height": "100%"}} />
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};

export default PartnersSection;
