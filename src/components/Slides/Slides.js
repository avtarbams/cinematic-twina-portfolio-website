import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import PhotoAlbum from "react-photo-album";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import photos from "./photos";

function Slides() {
  const [index, setIndex] = React.useState(-1);
  return (
    <Container fluid id="slides">
      <Particle />
      <Container>
        <Row>
        <Col className="home-about-description">
            <h1 className="section-title">
              WORK <span className="purple"> PICS </span>
            </h1>
          </Col>
          <Col md={12} className="home-about-description">
            <PhotoAlbum
              layout="rows"
              photos={photos}
              targetRowHeight={150}
              onClick={({ index: current }) => setIndex(current)}
            />

            <Lightbox
              index={index}
              slides={photos}
              open={index >= 0}
              close={() => setIndex(-1)}
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Slides;
