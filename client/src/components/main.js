import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingpage';
import About from './about';
import Register from './register';
import Contact from './contact';
import Confirmation from './confirmation'
import SchoolPage from './schoolPage'
import Schools from './schools'
import Alumni from './alumni'
import AlumConfirmation from './alum-confirm'


const Main = () => (
  <Switch>
    <Route exact path = "/" component={LandingPage}/>
    <Route path = "/about" component={About}/>
    <Route path = "/contact" component={Contact}/>
    <Route path = "/confirmation" component={Confirmation}/>
    <Route path = "/schools/:school" component={SchoolPage}/>
    <Route path = "/schools" component={Schools}/>

    <Route path = "/alumni" component={Alumni}/>
    <Route path = "/alum-confirm" component={AlumConfirmation}/>
  </Switch>
)

export default Main;
