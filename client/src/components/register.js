import React, { useState } from 'react';
import {Paper, FormControl, Input, InputLabel } from '@material-ui/core';
import withStyles from '@material-ui/core/styles/withStyles';
import { withRouter } from 'react-router-dom';
import firebase from './firebase';
import {Form, Button} from 'react-bootstrap';

const styles = theme => ({
	main: {
		width: 'auto',
		display: 'block', // Fix IE 11 issue.
		marginRight: theme.spacing.unit * 3,
		[theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
			width: 400,
			marginRight: 'auto',
		},
	}
})

function Register(props) {
	const { classes } = props

	const [name, setName] = useState('')
	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')
	const [highschool, setHighschool] = useState('')

	return (
		<main className= {classes.main}>
			<div className="register">
				<h2><b>Register</b></h2>
				<Form className={classes.form} onSubmit={e => e.preventDefault() && false }>
					<Form.Group controlId="formBasicPassword">
						<Form.Label>Full Name *</Form.Label>
						<Form.Control type="input" placeholder="Brian Chou" value={name} onChange={e => setName(e.target.value)}/>
					</Form.Group>

					<Form.Group controlId="formBasicEmail">
						<Form.Label>Email Address *</Form.Label>
						<Form.Control type="email" placeholder="missionforward@gmail.com" value={email} onChange={e => setEmail(e.target.value)}/>
					</Form.Group>

					<Form.Group controlId="formBasicPassword">
						<Form.Label>Password *</Form.Label>
						<Form.Control type="input" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
						<Form.Text className="text-muted">
						Must be at least six characters long
						</Form.Text>
					</Form.Group>

					<Form.Group controlId="formBasicInput">
						<Form.Label>High School*</Form.Label>
						<Form.Control type="input" placeholder="Mission San Jose High School" value={highschool} onChange={e => setHighschool(e.target.value)}/>
					</Form.Group>
					
					<Button className="register-button" type="submit" onClick={onRegister}>
						Sign Up
					</Button>
				</Form>

			</div>
		</main>
	)

  async function onRegister() {
		try {
			await firebase.register(name, email, password)
			await firebase.addHighschool(highschool)
			props.history.replace('/confirmation')
		} catch(error) {
			alert(error.message)
		}
	}
}

export default withRouter(withStyles(styles)(Register))
