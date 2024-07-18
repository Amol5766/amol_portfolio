import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import facerecognition from "../../Assets/Projects/face recognition.png";
import Agrichatbot from "../../Assets/Projects/Agri chatbot.png";
import salaryprediction from "../../Assets/Projects/salary prediction.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works</strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Agrichatbot}
              isBlog={false}
              title="Agri chatbot "              
              titleColor="#a24dd3" /* Purple color */
              description="An agriculture chatbot using Python and AI/ML offers farmers real-time guidance on crop management and pest control through conversational interfaces. It leverages NLP and machine learning to provide actionable insights and support sustainable practices."
              ghLink="https://github.com/Amol5766/agri-chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={salaryprediction}
              isBlog={false}
              title="Salary prediction"
              titleColor="#a24dd3" /* Purple color */
              description="A salary prediction model using Python and AI/ML forecasts employee salaries based on various factors like experience and skills. It utilizes regression algorithms to provide accurate and data-driven salary estimates."
              ghLink="https://github.com/Amol5766/salary-prediction-system"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={facerecognition}
              isBlog={false}
              title="Face recognition"
              titleColor="#a24dd3" /* Purple color */
              description="Facial recognition technology identifies and verifies people by analyzing their facial features. It scans and matches faces from images or videos. Commonly used for security and personalized access, it offers a fast and reliable way to recognize individuals."
              ghLink="https://github.com/Amol5766/face-detection"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
