import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
    <div>
      <Navbar variant="light" className = "NavBar" expand="lg" fixed="top">
        <Navbar.Brand href="/">Mission Forward</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/schoolList">Schools</Nav.Link>
            <Nav.Link href="#">Signup</Nav.Link>

          </Nav>
          <Nav className= "ml-auto">
            <Nav.Link href="/alumni">Alumni</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            {/*<Nav.Link href="#">Contact</Nav.Link>*/}
          </Nav>

        </Navbar.Collapse>
      </Navbar>
      <div className="page-content">
        <Main/>
      </div>
    </div>
    </HttpsRedirect>
  );
}

export default App;
