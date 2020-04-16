import React, { Component } from 'react';
import Register from './register';
import {Container, Button, Card, Row, Col } from 'react-bootstrap';
import MainPic from '../img/landing-page-img.jpg';
import ExperiencePic from '../img/landing-page-experience-img-1.png';
import ExperiencePic2 from '../img/landing-page-experience-img-2.png';
import ExperiencePic3 from '../img/landing-page-experience-img-3.png';
import AlumniPic from '../img/landing-page-alumni-img.png';
import SchoolPic from '../img/landing-page-school-img.png';

class LandingPage extends Component{
  render() {
    return(
      <Container fluid className="landing-page">
        <Row className="landing-page-main-page">
          <Col sm={5}>
            <div className="landing-page-text">
              <h3>Welcome to</h3>
              <h1><b>Mission</b></h1>
              <h2>Forward</h2>
              <h5>
              Helping soon-to-be college students navigate their personal and professional lives after high school.
              </h5>
              <Button className="landing-page-button" href="#join-us"><b>Join Us</b></Button>

            </div>
          </Col>
          <Col sm={7}>
            <img className="landing-page-pic" src={MainPic}/>
            {/* <a href="https://www.vecteezy.com/free-vector/college">College Vectors by Vecteezy</a> */}
          </Col>
        </Row>



        <Row className="landing-page-cards">
          <Col sm={4}>
            <Card className="landing-page-card">
              <Card.Img width="10vh" variant="top" src={AlumniPic} />
              <Card.Body>
                <Card.Title><b>100+ MSJ Class of 2016 Alumni</b></Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="landing-page-card">
              <Card.Img variant="top" src={SchoolPic} />
              <Card.Body>
                <Card.Title><b>20+ Supported Universities</b></Card.Title>
              </Card.Body>
            </Card>
          </Col>

          <Col sm={4}>
            <Card className="landing-page-card">
              <Card.Img variant="top" src={ExperiencePic3} />
              <Card.Body>
                <Card.Title><b>Learn From First-Hand College Experiences</b></Card.Title>
              </Card.Body>
            </Card>
          </Col>
        </Row>



        <Row id="join-us" className="landing-page-form">
            <Col sm={5}>
              <Register className = "register"></Register>
            </Col>
            <Col className="landing-page-form-description" sm={7}>
              <h3>We are starting with a tool to help current high school seniors learn more about what it’s like to attend popular colleges from MSJ alumni. </h3>
              <br></br>
              <h3>To access this tool and for additional updates, please leave your name and email.</h3>
            </Col>
        </Row>

      </Container>
    );
  }
}

export default LandingPage;
