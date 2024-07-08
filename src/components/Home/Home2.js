import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a passionate and experienced cinematographer with a
              certification from the prestigious&nbsp;
              <b className="purple">
                Film and Television Institute of India (FTII), Pune
              </b>
              &nbsp;in 2006. Over the years, I have honed my skills across a
              diverse range of projects, including TV shows, reality shows,
              sports, adventure, music, food, corporate films, awards, and
              events.
              <br />
              <br />
              My work is characterized by a keen eye for detail, creative
              vision, and a dedication to capturing the essence of every moment.
              I bring a blend of technical expertise and artistic sensibility to
              every project, striving to create visually compelling and
              impactful narratives.
              <br />
              <br />
              With a lens as my wand and creativity as my spell, I craft visual
              symphonies that resonate with the soul.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
