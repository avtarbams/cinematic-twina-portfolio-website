import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import twina from "../../Assets/twina.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";
import Projects from "../Projects/Projects";
import ContactUs from "../ContactUs/ContactUs";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <h1 className="heading-name">TWINA BAMRA</h1>
              <div className="typewriter-text">
                <Type />
              </div>
            </Col>
            <Col md={4}>
              <img
                src={twina}
                alt="twina"
                className="img-fluid"
                style={{ maxHeight: "450px", borderRadius: "10px" }}
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
      <Projects />
      <ContactUs />
    </section>
  );
}

export default Home;
