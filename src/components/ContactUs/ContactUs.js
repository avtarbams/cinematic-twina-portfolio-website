import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

function ContactUs() {
  return (
    <Container fluid className="project-section" id="works">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Connect <strong className="purple">Now</strong>
        </h1>
        <Row>
          <Col md={6} className="home-about-description">
            <p className="home-about-body"><FaPhoneVolume />&nbsp;8169825375</p>
          </Col>
          <Col md={6} className="home-about-description">
            <p className="home-about-body" style={{textAlign: 'end'}}><AiOutlineMail />&nbsp;twinabamra@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
