import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import YouTube from "react-youtube";

function ProjectCards(props) {
  const opts = {
    height: "100%",
    width: "100%",
    playerVars: {
      controls: 1,
      disablekb: 1,
      listType: 'playlist'
    },
  };
  return (
    <Card className="project-card-view">
      <Card.Body>
        {props.videoId ? (
          <YouTube
            videoId={props.videoId}
            opts={opts}
            className="card-imahe-top"
          />
        ) : (
          <Card.Img variant="top" src={props.imgPath} alt="card-img"></Card.Img>
        )}
        <Card.Title className="pt-1" style={{textAlign: 'start'}}><strong>{props.title}</strong></Card.Title>
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
