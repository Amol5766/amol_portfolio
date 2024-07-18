import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import "./ProjectCards.css";

function ProjectCards(props) {
  return (
    <div className="project-card-wrapper">
      <div className="circle circle-top"></div>
      <div className="circle circle-bottom"></div>
      <div className="corner corner-top-left"></div>
      <div className="corner corner-bottom-right"></div>
      <Card className="project-card-view">
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        <Card.Body>
          <Card.Title style={{ color: props.titleColor }}>
            {props.title}
          </Card.Title>
          <Card.Text style={{ textAlign: "justify" }}>
            {props.description}
          </Card.Text>
          <Button variant="primary" href={props.ghLink} target="_blank">
            <BsGithub /> &nbsp;
            {props.isBlog ? "Blog" : "GitHub"}
          </Button>
          {"\n"}
          {"\n"}
          {!props.isBlog && props.demoLink && (
            <Button
              variant="primary"
              href={props.demoLink}
              target="_blank"
              style={{ marginLeft: "10px" }}
            >
              <CgWebsite /> &nbsp; {"Demo"}
            </Button>
          )}
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProjectCards;
