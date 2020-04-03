import React, { Component } from 'react';
import {Tabs, Tab} from 'react-mdl';

class SchoolPage extends Component{
  render() {
    return(
      <div className="category-tabs">
        <h2>University of California, Santa Barbara</h2>
        <Tabs ripple>
          <Tab className ="tab-text"> Academics </Tab>
          <Tab className ="tab-text"> Lifestyle </Tab>
          <Tab className ="tab-text"> Reflection </Tab>
          <Tab className ="tab-text"> View All </Tab>
        </Tabs>
        <img className = "UCSB" src="https://upload.wikimedia.org/wikipedia/en/thumb/a/a8/UC_Santa_Barbara_Gauchos_logo.svg/1200px-UC_Santa_Barbara_Gauchos_logo.svg.png" alt="Simply Easy Learning" width="500" height="400"/>

      </div>
    );
  }
}

export default SchoolPage;
