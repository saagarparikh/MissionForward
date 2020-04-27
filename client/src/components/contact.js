import React, { Component } from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap'

class Contact extends Component{
  render() {
    return(
      <div className="contact-page">
        <Row className>
          <Col md={6} className="contact-page-text">
              <h1><b>Contact Us</b></h1>
              <h3>Do you have any questions or concerns? Is the school you 
                  want to learn more about not listed in our schools page?
                  We welcome them! Feel free to contact us! Fill out our 
                  contact form or email us at <span className="contact-email">fwd.mission@gmail.com</span>! 
              </h3>
          </Col>
          <Col md={{span:5,offset:1}} className="contact-page-form">
            <div className="contact-back">
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
 							Submit
 						</Button>	
             </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
