import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 className="section-title">
              ABOUT <span className="purple"> ME </span>
            </h1>
            <p className="home-about-body">
              I am a passionate and experienced cinematographer with a
              certification from the prestigious&nbsp;
              <b className="purple">
                Film and Television Institute of India (FTII), Pune
              </b>
              . Over the years, I have honed my skills across a
              diverse range of projects, including TV shows, reality shows,
              sports, adventure, music, food, corporate films, awards, and
              events.
              <br />
              <br />
              Over the years, I have had the privilege of filming a diverse
              array of national and international projects, spanning the vibrant
              realms of advertising films, corporate films, and documentaries
              that add depth and insight to my work . My portfolio also
              encompasses dynamic reality shows ,thrilling adventure shows,
              delectable food shows,captivating travel shows, as well as grand
              events and prestigious award ceremonies. Additionally, I have
              delved into the world of sports by producing and filming renowned
              leagues, and have had the joy of documenting the intimacy of
              pre-wedding films and exquisite wedding photography. Each
              endeavour has enriched my artistic journey, allowing me to weave
              stories that resonate with audiences.
              <br />
              <br />
              With a lens as my wand and creativity as my spell, I craft visual
              symphonies that resonate with the soul.
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
