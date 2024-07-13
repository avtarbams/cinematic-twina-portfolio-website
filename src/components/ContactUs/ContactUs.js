import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";

function ContactUs() {
  return (
    <Container fluid id="works">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
          <div className="contact-me">Please feel free to contact me to discuss any cinematography assignments. <br/><br/>
          <strong>twinabamra@gmail.com</strong>
          <br/><br/>
          <strong>+91 8169825375</strong>
            </div>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
