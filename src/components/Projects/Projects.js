import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import works from "../../Assets/Projects/works.json";

function Projects() {
  const [data] = useState(works);
  const workCards =
    data &&
    data.length > 0 &&
    data.map((work) => (
      <Col md={4} className="project-card">
        <ProjectCard
          title={work.title}
          description={work.description}
          imgPath={work.imgPath}
          videoId={work.videoId}
        />
      </Col>
    ));
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col className="home-about-description">
            <h1 className="section-title">
              SELECTED <span className="purple"> WORKS </span>
            </h1>
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {workCards}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
