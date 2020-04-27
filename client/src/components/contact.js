import React, { Component } from 'react';
import {Row, Col, Form, Button} from 'react-bootstrap'

class Contact extends Component{
  render() {
    return(
      <div className="contact-page">
        <Row className>
          <Col className="contact-page-text">
              <h1><b>Contact Us</b></h1>
              <h3>Do you have any questions or concerns? Is the school you 
                  want to learn more about not listed in our schools page?
                  We welcome them! Feel free to contact us! Fill out our 
                  contact form or email us at fwd.mission@gmail.com! 
              </h3>
          </Col>
          <Col className="contact-page-form">
            <Form>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="Benji Bottleton"
                  name="name"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  type="input"
                  placeholder="fwd.mission@gmail.com"
                  name="email"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Request</Form.Label>
                <Form.Control 
                  as="textarea" 
                  placeholder="Any school requests, questions, concerns"
                  rows="5" 
                />
              </Form.Group>
            </Form>
            <Button className="contact-button" type="submit">
 							Sign Up
 						</Button>	
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
