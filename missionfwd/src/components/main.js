import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Resume from './resume';
import Contact from './contact';


const Main = () => (
  <Switch>
    <Route exact path = "/" component={LandingPage}/>
    <Route path = "/about" component={About}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/resume" component={Resume}/>
  </Switch>
)

export default Main;
