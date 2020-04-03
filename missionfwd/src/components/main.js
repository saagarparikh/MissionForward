import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Register from './register';
import Contact from './contact';
import Confirmation from './confirmation'
import SchoolPage from './schoolPage'


const Main = () => (
  <Switch>
    <Route exact path = "/" component={LandingPage}/>
    <Route path = "/about" component={About}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/register" component={Register}/>
    <Route path = "/confirmation" component={Confirmation}/>
    <Route path = "/schoolpage" component={SchoolPage}/>
  </Switch>
)

export default Main;
