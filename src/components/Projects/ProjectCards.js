import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import YouTube from "react-youtube";

function ProjectCards(props) {
  const opts = {
    height: "100%",
    width: "100%",
  };
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img"></Card.Img>
      <Card.Body>
        {/* <YouTube videoId="2g811Eo7K8U" opts={opts} /> */}
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        {props.link && (
          <Button variant="primary" href={props.link} target="_blank">
            Youtube Link
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
