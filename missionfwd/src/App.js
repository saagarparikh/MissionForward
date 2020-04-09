import React from 'react';
import './App.css';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl'
import Main from './components/main'
import { Link } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Form, FormControl, Button} from 'react-bootstrap';

function App() {
  return (
    <div>
      <Navbar variant="light" expand="lg" fixed="top">
        <Navbar.Brand href="/">Mission Forward</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/schoolList">Schools</Nav.Link>
            <Nav.Link href="#">Signup</Nav.Link>

          </Nav>
          <Nav>
            <Nav.Link href="#">Alumni</Nav.Link>
            <Nav.Link href="/about">About</Nav.Link>
            <Nav.Link href="#">Contact</Nav.Link>
          </Nav>
          
        </Navbar.Collapse>
      </Navbar> 
      <div className="page-content">
        <Main/>
      </div>
    </div>

    // <div className="demo-big-content">
    //     <Layout>
    //         <Header className="header-color" title={<Link to="/">Mission Forward</Link>} scroll>
    //             <Navigation>
    //                 <Link to="/about">About</Link>
    //             </Navigation>
    //         </Header>
    //         <Drawer title="Mission Forward">
    //           <Navigation>
    //               <Link to="/about">About</Link>
    //           </Navigation>
    //         </Drawer>
    //         <Content>
    //             <div className="page-content"/>
    //             <Main/>
    //         </Content>
    //     </Layout>
    // </div>

  );
}

export default App;
