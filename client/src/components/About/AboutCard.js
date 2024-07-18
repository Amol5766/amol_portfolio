import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
import "./AboutCard.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify", fontSize: "1.1em" }}>
            Hi Everyone, I am <span className="purple">AMOL M</span> from <span className="purple">Karnataka, India.</span>
            <br />
            Graduated with a B.E. in Computer Science.
            <br />
            Currently exploring opportunities to find my niche.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul style={{ fontSize: "1.1em", lineHeight: "1.6", marginTop: "10px" }}>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Football
            </li>
          </ul>
          <p style={{ color: "rgb(155 126 172)", fontSize: "1.1em", marginTop: "20px" }}>
            "Create something that not only puts a smile on your face but also brightens the world around you!"
          </p>
          <footer className="blockquote-footer" style={{ fontSize: "1em", marginTop: "10px" }}>AMOL M</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
