import React, { useState } from 'react'
import {Form, Col, Button} from 'react-bootstrap';
import firebase from './firebase';

import { withRouter } from 'react-router-dom';
import * as yup from 'yup';
import {Formik} from "formik";

const schema = yup.object({
	name: yup.string().required("This field is required"),
	email: yup.string().email().required("This field is required"),
	highschool: yup.string().required("This field is required"),
	password: yup.string().required().min(6, "Must Contain at least 6 Characters"),
	passwordConfirmation: yup.string().oneOf([yup.ref('password'), null],"Passwords do not match.")
  });
  
  function Register(props) {
	return (
		<main className="register-back">
 			<div className="register">
				<h2><b>Register</b></h2>
				<Formik
					validationSchema={schema}
					initialValues={{
						name: '',
						email: '',
						highschool: '',
						password: '',
					}}
					onSubmit={(values) => {
						onRegisterStudent(values.name, values.email, values.highschool, values.password)
						props.history.replace('/schools');
						}}
				>
					{({
						handleSubmit,
						handleChange,
						values,
						errors,
						touched
					}) => (
					<Form noValidate onSubmit={handleSubmit}>
						<Form.Group>
							<Form.Label>Full Name</Form.Label>
							<Form.Control
								type="input"
								placeholder="Benji Bottleton"
								name="name"
								value={values.name}
								onChange={handleChange}
								isInvalid={!!errors.name}
								isValid={touched.name && !errors.name}
							/>
							<Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Email Address</Form.Label>
							<Form.Control
								type="input"
								placeholder="missionfoward@gmail.com"
								name="email"
								value={values.email}
								onChange={handleChange}
								isInvalid={!!errors.email}
								isValid={touched.email && !errors.email}
							/>
							<Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>High School</Form.Label>
							<Form.Control
								type="input"
								placeholder="Mission San Jose High School"
								name="highschool"
								value={values.highschool}
								onChange={handleChange}
								isInvalid={!!errors.highschool}
								isValid={touched.highschool && !errors.highschool}
							/>
							<Form.Control.Feedback type="invalid">{errors.highschool}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group>
							<Form.Label>Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Mission Forward Password"
								name="password"
								value={values.password}
								onChange={handleChange}
								isInvalid={!!errors.password}
								isValid={touched.password && !errors.password}
							/>
							<Form.Text className="text-muted">Must be at least 6 characters.</Form.Text>
							<Form.Control.Feedback type="invalid">{errors.password}</Form.Control.Feedback>
						</Form.Group>

						<Form.Group >
							<Form.Label>Confirm Password</Form.Label>
							<Form.Control
								type="password"
								placeholder="Retype Password"
								name="passwordConfirmation"
								value={values.passwordConfirmation}
								onChange={handleChange}
								isInvalid={!!errors.passwordConfirmation}
								isValid={touched.passwordConfirmation && !errors.passwordConfirmation}
							/>
							<Form.Control.Feedback type="invalid">{errors.passwordConfirmation}</Form.Control.Feedback>
						</Form.Group>
						
						<Button className="register-button" type="submit">
 							Sign Up
 						</Button>					
					</Form>
					)}
				</Formik>
			</div>
		</main>
	);
  }

async function onRegisterStudent(name, email, highschool, password){
    try {
		console.log(name, email, password)
		await firebase.register(name, email, password)
        await firebase.addHighschool(highschool)
    } catch(error) {
        alert(error.message)
    }
}
  
export default withRouter(Register);