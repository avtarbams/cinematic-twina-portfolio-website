import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import { FaPhoneVolume } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";

function ContactUs() {
  return (
    <Container fluid id="works">
      <Particle />
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <p className="home-about-body"><FaPhoneVolume />&nbsp;8169825375<br/><AiOutlineMail />&nbsp;twinabamra@gmail.com</p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default ContactUs;
