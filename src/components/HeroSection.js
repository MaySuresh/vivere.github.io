import React from 'react';
import { Carousel, Container, Button } from 'react-bootstrap';
import comp from './comp.css'

// Assume you have images imported or defined somewhere
import image1 from '../assest/cyber-security-2296269_1920.jpg';
import image2 from '../assest/pexels-fauxels-3183197.jpg';
import image3 from '../assest/globe-4872998_1920.jpg';
import image4 from '../assest/globe.png'

const HeroSection = () => {
  return (
    <Container fluid className="p-5 text-center hero-container">
      <Carousel indicators={false} controls={false} fade interval={3000} pause={false}>
      <Carousel.Item>
      <img className="d-block w-100" src={image4} alt="First slide" />
    </Carousel.Item>  
      <Carousel.Item>
          <img className="d-block w-100" src={image1} alt="Second slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image2} alt="Third slide" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="d-block w-100" src={image3} alt="Forth slide" />
        </Carousel.Item>

      </Carousel>
      <div className="hero-text">
        <h1 className="jumbotron-heading">Welcome to Vivere Global!</h1>
        <p className="lead">Safeguarding Your Digital Ecosystem with Next-Generation Identity Authentication and Access Management.</p>
        <p>
          <Button href="#"  className="m-2">Our Team</Button>
          <Button href="#" variant="secondary" className="m-2">Our Mission</Button>
        </p>
      </div>
    </Container>
  );
};

export default HeroSection;
