import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
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
    <Container fluid className="project-section" id="works">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Selected <strong className="purple">Works</strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          {workCards}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
