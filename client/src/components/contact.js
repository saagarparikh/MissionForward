import React, { Component } from 'react';
import {Row, Col, Form, Button, Container} from 'react-bootstrap'
import axios from 'axios';

class Contact extends Component{
  constructor(props) {
    super(props);
    this.state = {
      contact_name : "",
      contact_email : "",
      contact_request : "",
      validated: false
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  setValidated(value){
    this.setState({
      validated: value
    });
  }

  handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      this.setValidated(true);
      alert("Please go back and fill out the required fields. Thanks :)")
      event.preventDefault();
      event.stopPropagation();
    }else{
      const contactFormData = {
        user_name : this.state.contact_name,
        user_email : this.state.contact_email,
        user_request : this.state.contact_request
      }
      axios.post('http://localhost:5000/contact/contact-form', contactFormData)
        .then(res => console.log(res.data)).catch((error) => {
                      console.log(error)
                    });
    }
  }

  setContactName(name) {
    this.setState({
      contact_name: name
    });
  }

  setContactEmail(email) {
    this.setState({
      contact_email: email
    });
  }

  setContactRequest(request) {
    this.setState({
      contact_request: request
    });
  }

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
            <Form onSubmit={this.handleSubmit} noValidate validated={this.state.validated}>
              <Form.Group>
                <Form.Label>Full Name</Form.Label>
                <Form.Control
                  required
                  type="input"
                  placeholder="Benji Bottleton"
                  name="name"
                  onChange={e => this.setContactName(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Email Address</Form.Label>
                <Form.Control
                  required
                  type="input"
                  placeholder="fwd.mission@gmail.com"
                  name="email"
                  onChange={e => this.setContactEmail(e.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Request</Form.Label>
                <Form.Control
                  required
                  as="textarea"
                  placeholder="Any school requests, questions, concerns"
                  rows="5"
                  onChange={e => this.setContactRequest(e.target.value)}
                />
              </Form.Group>

              <Button className="contact-button" type="submit">
                Submit
              </Button>
            </Form>
             </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default Contact;
