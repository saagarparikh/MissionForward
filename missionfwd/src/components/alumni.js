import { Component } from 'react';
import React, { useState } from 'react'
import ReactDOM from 'react-dom';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import InputGroup from 'react-bootstrap/InputGroup';
import firebase from './firebase';
import { Alert } from 'react-alert'
import { PureComponent, Fragment } from 'react';

function Alumni(props) {
  const { classes } = props
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [school, setSchool] = useState('')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('')
  const [minor, setMinor] = useState('')
  const [grad, setGrad] = useState('')
  const [q0, setQ0] = useState('')
  const [q1, setQ1] = useState('')
  const [q2, setQ2] = useState('')
  const [q3, setQ3] = useState('')
  const [q4, setQ4] = useState('')
  const [q5, setQ5] = useState('')
  const [q6, setQ6] = useState('')
  const [q7, setQ7] = useState('')
  const [q8, setQ8] = useState('')
  const [q9, setQ9] = useState('')
  const [q10, setQ10] = useState('')
  const colleges = require("./csvjson-3.json")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      alert("Please go back and fill out the required fields. Thanks :)")
      event.preventDefault();
      event.stopPropagation();
    }else{
      onRegister(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9)
      props.history.replace('/alum-confirm')
    }
  };

  const handleChange = (e) => {
    school = e.target.value;
  };

  return (
    <div>
      <div className = "alum-form-header">
        <h1>College/University Alumni Survey</h1>
        <p>These responses will anonymously (unless you authorize otherwise) shared publicly, with the intent to help current MSJ seniors make their decisions on where to attend school. Please answer them with the undergraduate institution you will be graduating from in mind.</p>
        <p>There are three buckets of questions: academic/professional, lifestyle/social, and general questions. The questions are a mix of required and optional -- answer as you see fit. Thank you, we appreciate your help!!</p>
        <hr></hr>
    </div>

      <Form className = "alum-form" noValidate validated={validated} onSubmit={handleSubmit} style={{fontFamily: 'Nunito'}} autoComplete="off">
        <Form.Row>
          <Form.Group controlId="exampleForm.SelectCustom">
            <Form.Label >Select University*</Form.Label>
            <Form.Control as="select" required custom name = "school" onChange={e => setSchool(e.target.value)}>
              {colleges.map(item => (
                <option value={item.Institution}>
                  {item.Institution}
                </option>
              ))}
            </Form.Control>
          </Form.Group>

        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Name (optional)</Form.Label>
            <Form.Control
              type="text"
              name = "name"
              placeholder= "Name"
              onChange={e => setName(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Email (optional)</Form.Label>
            <Form.Control
              type="email"
              placeholder= "Email"
              name = "minor"
              onChange={e => setEmail(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Major *</Form.Label>
            <Form.Control
              required
              type="text"
              name = "major"
              placeholder= "Major"
              onChange={e => setMajor(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Minor</Form.Label>
            <Form.Control
              type="text"
              placeholder= "Minor (if applicable)"
              name = "minor"
              onChange={e => setMinor(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Graduating Year *</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder= "Graduating Year (Ex: 2020)"
              name = "grad"
              onChange={e => setGrad(e.target.value)}
            />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Form.Row>
        <Form.Row>
        </Form.Row>

        <h3>Academics/Professional Questions</h3>
        <Form.Group controlId="q0">
          <Form.Label>How would you describe the quality of academic instruction (e.g. number of students, types of teachers, registration)? *</Form.Label>
          <Form.Control as="textarea" rows="3" required name = "q0" placeholder= "Enter text" onChange={e => setQ0(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q1">
          <Form.Label>What types of resources (e.g. clubs, programs, career fairs) does your school have to help with internships, career planning, and on-campus jobs (e.g. research)? *</Form.Label>
          <Form.Control as="textarea" rows="3" required type = "text" name = "q1" placeholder= "Enter text" onChange={e => setQ1(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q2">
          <Form.Label>How flexible is your school with switching career paths and majors? (optional)</Form.Label>
          <Form.Control as="textarea" rows="3" type = "text" placeholder= "Enter text" name = "q2" onChange={e => setQ2(e.target.value)}/>
        </Form.Group>

        <h3>Lifestyle/Social Questions</h3>
        <Form.Group controlId="q3">
          <Form.Label>Describe your experience with school facilities (e.g. dining halls, dorms, athletic facilities). *</Form.Label>
          <Form.Control as="textarea" rows="3" required type = "text" placeholder= "Enter text" name = "q3" onChange={e => setQ3(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q4">
          <Form.Label>Describe the student body culture (e.g. atmosphere, social dynamics) in the way you experienced it. *</Form.Label>
          <Form.Control as="textarea" rows="3"  placeholder= "Enter text" required name = "q4" onChange={e => setQ4(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q5">
          <Form.Label>What clubs or organizations did you get involved with (e.g. Greek life, professional groups, etc)? What was your experience like? (optional)</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder= "Enter text" name = "q5" onChange={e => setQ5(e.target.value)}/>
        </Form.Group>

        <h3>General Questions</h3>
        <Form.Group controlId="q6">
          <Form.Label>What was the hardest, or worst, aspect of going to your school? *</Form.Label>
          <Form.Control as="textarea" rows="3" required placeholder= "Enter text" required name = "q6" onChange={e => setQ6(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q7">
          <Form.Label>What specific aspect of your school are you most grateful for? *</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder= "Enter text" required name = "q7" onChange={e => setQ7(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q8">
          <Form.Label>What are things you wish you had known about your school before you chose it? (optional)</Form.Label>
          <Form.Control as="textarea" rows="3"placeholder= "Enter text" name = "q8" onChange={e => setQ8(e.target.value)}/>
        </Form.Group>

        <Form.Group controlId="q9">
          <Form.Label>What other information would you give an MSJ senior considering to attend your school? (optional)</Form.Label>
          <Form.Control as="textarea" rows="3" placeholder= "Enter text" name = "q9" onChange={e => setQ9(e.target.value)}/>
        </Form.Group>

        <Button type="submit">Submit form</Button>
      </Form>
    </div>
  );
}

async function onRegister(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
  try {
    await firebase.register(name, email, "password")
    await firebase.addCollegeAlumData(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9)
  } catch(error) {
    alert(error.message)
  }
}

export default Alumni;
