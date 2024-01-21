import React from 'react';
import { Col, Nav, Row, Tab, Image } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './comp.css';
import idn from '../assest/idn1.png';
import iiq from '../assest/iiq1.png';

const Offerings = () => {
  // Animation settings
  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="mx-0">
        <Col lg={12} className="mb-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2  }}
            variants={variants}
          >
            <Col className="text-center mb-4">
            <h1 className='headerName'>Services</h1>
          </Col>
          </motion.div>
        </Col>
        <Col sm={3} className="mb-3 d-flex align-items-center">
        <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2  }}
        variants={variants}
      >
          <Nav variant="pills" className="flex-column w-100">
            <Nav.Item>
              <Nav.Link eventKey="first">IdentityNow Integration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">IdentityIQ Integration</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">Customized Solutions</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">Ongoing Support</Nav.Link>
            </Nav.Item>
          </Nav>
          </motion.div>
        </Col>
        <Col sm={9}>
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            variants={variants}
          >
            <Tab.Content className='tabContentStyle'>
              <Tab.Pane eventKey="first">
                <Row className="align-items-center">
                  <Col md={8}>
                    <p>
                      SailPoint IdentityNow provides a cloud-based identity governance solution
                      that we integrate to streamline and secure your move to the cloud. Our approach adapts
                      IdentityNow to your specific business requirements, ensuring a scalable and user-friendly experience.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image src={idn} alt="IdentityNow" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                <Row className="align-items-center">
                  <Col md={8}>
                    <p>
                      For businesses preferring on-premises solutions, we integrate SailPoint's
                      IdentityIQ to offer comprehensive identity governance. Our service ensures that IdentityIQ
                      works seamlessly with your existing IT infrastructure, providing improved visibility, compliance management, and risk mitigation.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image src={iiq} alt="IdentityIQ" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                <Row className="align-items-center">
                  <Col md={8}>
                    <p>
                      We understand that each business has unique challenges. Our team focuses on
                      delivering a SailPoint solution that fits your specific needs, whether it's for managing user access,
                      handling digital identities, or protecting sensitive data.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image src={iiq} alt="Customized Solutions" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="fourth">
                <Row className="align-items-center">
                  <Col md={8}>
                    <p>
                      After integrating SailPoint solutions, we offer continuous support to ensure your system remains
                      effective and up-to-date. Our aim is to help you get the most out of your identity governance strategy as your business evolves.
                    </p>
                  </Col>
                  <Col md={4}>
                    <Image src={iiq} alt="Ongoing Support" className="img-fluid" />
                  </Col>
                </Row>
              </Tab.Pane>
            </Tab.Content>
          </motion.div>
        </Col>
      </Row>
    </Tab.Container>
  );
};

export default Offerings;
