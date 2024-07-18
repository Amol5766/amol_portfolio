import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import { AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn, FaInstagram } from 'react-icons/fa';

import myImg from "../../Assets/img.png";
import myImg2 from "../../Assets/amol.png"; // Import your second image
import "./Home2.css"; // Import your CSS file for styling

const Home2 = () => {
  const [rotateAngle, setRotateAngle] = useState(0);
  const [currentImage, setCurrentImage] = useState(myImg); // Initial image

  const handleImageChange = () => {
    setCurrentImage(currentImage === myImg ? myImg2 : myImg); // Toggle between images
  };

  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have at least learned something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C++, JavaScript, and Python. </b>
              </i>
              <br />
              <br />
              My fields of interest include building new &nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">Deep Learning and Natural Language Processing.</b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern JavaScript Libraries and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvatar">
            <Tilt
              tiltMaxAngleX={35}
              tiltMaxAngleY={35}
              perspective={1000}
              scale={1.02}
              transitionSpeed={3000}
              onMouseEnter={() => setRotateAngle(5)}
              onMouseLeave={() => setRotateAngle(0.5)}
              style={{ transform: `rotateY(${rotateAngle}deg)` }}
            >
              <img src={currentImage} className="img-fluid" alt="Avatar" />
            </Tilt>
            <button className="switch-button" onClick={handleImageChange}>Switch</button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/Amol5766"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/AmolM002"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/amol-m-82755a255/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/not_amol_ok/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-color home-social-icons"
                >
                  <FaInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
};

export default Home2;
