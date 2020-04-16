import React from 'react';
import './App.css';
import Main from './components/main'
import { Link } from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';
import HttpsRedirect from 'react-https-redirect';

function App() {
  return (
    <HttpsRedirect>
    <div>
      <Navbar colapseOnSelect expand='lg' fixed="top">
        <Navbar.Brand href="/"><b>Mission Forward</b></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav>
            <Nav.Link href="/schools">Schools</Nav.Link>
            <Nav.Link href="/alumni">Alumni</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
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
