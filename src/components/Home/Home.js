import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/cinematographer.png";
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
            <Col md={7} className="home-header">
              <h1 className="heading-name">Twina Bamra</h1>
              <div style={{ padding: 25, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 20 }}>
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid"
                style={{ maxHeight: "450px" }}
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
