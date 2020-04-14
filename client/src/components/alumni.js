import React, { useState } from 'react'
import {Form, Col, Button} from 'react-bootstrap';
import firebase from './firebase';
import axios from 'axios';

function Alumni(props) {
  const [validated, setValidated] = useState(false);
  const [name, setName] = useState('')
  const [school, setSchool] = useState('Select University')
  const [email, setEmail] = useState('')
  const [major, setMajor] = useState('')
  const [minor, setMinor] = useState('')
  const [grad, setGrad] = useState('')
  const [anon, setAnon] = useState('Yes')
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
  const colleges = require("./csvjson-3.json")

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      setValidated(true);
      alert("Please go back and fill out the required fields. Thanks :)")
      event.preventDefault();
      event.stopPropagation();
    }else{

      const alumniData = {
        school: school,
        name: name,
        email: email,
        major: major,
        minor: minor,
        grad: grad,
        anon: anon,
        q0: q0,
        q1: q1,
        q2: q2,
        q3: q3,
        q4: q4,
        q5: q5,
        q6: q6,
        q7: q7,
        q8: q8,
        q9: q9
      }

      onConfirmAlum(alumniData)

      props.history.replace('/alum-confirm')
    }
  };

  return (
    <div className="alumni-page">
      <div className = "alum-form-header">
        <h1><b>College &amp; University Alumni Survey</b></h1>
        <h5>These responses will <b>ANONYMOUSLY</b> (unless you note otherwise) be shared publicly, with the intent to help current
            MSJ seniors make their decisions on where to attend school. Please answer them with the undergraduate institution 
            you will be graduating from in mind.
        </h5>
        <br></br>
        <h5>There are three buckets of questions: academic/professional, lifestyle/social, and general questions. The questions 
            are a mix of required and optional -- answer as you see fit. Thank you, we appreciate your help!!
        </h5>

        <div className="alumni-form-button-div">
          <Button className="alumni-form-button" href="#form">Begin Survey</Button>
        </div>
      </div>

      <div id="form">
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

        <Form className = "alum-form" noValidate validated={validated} onSubmit={handleSubmit} autoComplete="off">
        <h3><b>Basic Information</b></h3>
          <Form.Row>
            <Form.Group controlId="exampleForm.SelectCustom">
              <Form.Label> Select University *</Form.Label>
              <Form.Control as="select" required custom name = "school" defaultValue = "Base" onChange={e => setSchool(e.target.value)}>
                {colleges.map(item => (
                  <option key={item.Institution} value={item.Institution}>
                    {item.Institution}
                  </option>
                ))}
              </Form.Control>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Name *</Form.Label>
              <Form.Control
                type="text"
                required
                name = "name"
                placeholder= "Name"
                onChange={e => setName(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Email *</Form.Label>
              <Form.Control
                type="email"
                placeholder= "Email"
                name = "minor"
                required
                onChange={e => setEmail(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} controlId="selectCustom">
              <Form.Label >Would you like to be anonymous? *</Form.Label>
              <Form.Control as="select" required custom name = "anon" defaultValue = "Yes" onChange={e => setAnon(e.target.value)}>
                <option>Yes</option>
                <option>No</option>
              </Form.Control>
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

          <br></br>
          <br></br>

          <h3><b>Academics/Professional Questions</b></h3>
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

          <br></br>
          <br></br>

          <h3><b>Lifestyle/Social Questions</b></h3>
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

          <br></br>
          <br></br>

          <h3><b>General Questions</b></h3>
          <Form.Group controlId="q6">
            <Form.Label>What was the hardest, or worst, aspect of going to your school? *</Form.Label>
            <Form.Control as="textarea" rows="3" required placeholder= "Enter text" name = "q6" onChange={e => setQ6(e.target.value)}/>
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

          <br></br>
          <Button className="alumni-form-submit" type="submit">Submit form</Button>

        </Form>
      </div>
    </div>
  );
}

async function onConfirmAlum(alumniData){
  let ret = await axios.post('/alumni-data/add', alumniData)
    .then(res => console.log(res.data));
  return ret;
}

async function onRegisterAlum(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9) {
  try {
    firebase.register(name, email, "password")
    firebase.writeUserData(school, name, major, minor, email, grad, q0, q1, q2, q3, q4, q5, q6, q7, q8, q9)
  } catch(error) {
    alert(error.message)
  }
}

export default Alumni;
