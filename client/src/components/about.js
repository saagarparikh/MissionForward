import React, { Component } from 'react';

class About extends Component{
  render() {
    return(
      <div className = "about-body">
        <div className = "about-body-text">
          <h1>About</h1>
          <h2>Background</h2>
          <h4>
            We are three Mission San Jose alumni (Class of 2016) who just recently wrapped up college. We were looking for ways to give back to our hometown, especially during the tumultuous times we live in today. We settled on the idea of crowdsourcing feedback on university experiences from our class, and sharing that feedback with current MSJ seniors to help them decide where to spend the next four years of their lives.
          </h4>
          <h2>Mission</h2>
          <h4>
            Ultimately, our mission is to build products and services that will help soon-to-be college students navigate their personal and professional lives. This is what we’re starting with, but we’re excited to see what’s next!
          </h4>
          <h2>Reach Out</h2>
          <h4>
            Feel free to reach out to us with any questions or feedback -- we’d love to hear from you! Email at fwd.mission@gmail.com.
          </h4>
        </div>

      </div>
    );
  }
}

export default About;
