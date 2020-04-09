import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Register from './register';
import Contact from './contact';
import Confirmation from './confirmation'
import SchoolPage from './schoolPage'
import SchoolList from './schoolList'

const Main = () => (
  <Switch>
    <Route exact path = "/" component={LandingPage}/>
    <Route path = "/about" component={About}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/register" component={Register}/>
    <Route path = "/confirmation" component={Confirmation}/>
    <Route path = "/SchoolList/:school" component={SchoolPage}/>
    <Route path = "/SchoolList" component={SchoolList}/>
    
  </Switch>
)

export default Main;
