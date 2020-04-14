import React, { Component } from 'react';
import {Row, Col} from 'react-bootstrap';
import CollegeChart from '../img/about-college-chart.png';
import HSChart from '../img/about-hs-chart.png';

class About extends Component{
  render() {
    return(
      <div className="about-page">
        <div className="about-intro">
          <h1><b>Our Story</b></h1>
          <h3>We started Mission Forward to give back to our community especially during the uncertain and tumultuous 
              times we live in. Due to COVID-19 and the lockdown mandates many states have issued, high school seniors 
              can’t visit colleges they’re considering attending and are looking to secondary sources of information to aid 
              their decision. We hope that our tool helps you with that!
          </h3> 
        </div>
        <div className="about-info-gap">
          <h2><b>The Information Gap</b></h2>
          <h3>Cost of attendance. Prestige. Family preferences. Quality of academics.</h3>
          <h4>These are some of the many factors to consider when making your college decisions.</h4>
          <br></br>
          <p>When you’re a high school senior, you may think you know which of these factors to weight most heavily — which factors 
            are truly important. But you’re not 100% certain. However, at the end of your college experience, it becomes apparent 
            which of the factors truly were important, and which seemed important but turned out not to matter in the end. We asked 
            50+ MSJ alum to tell us what two factors they made their decisions on, and what two factors they wish they made their 
            decisions on having graduated college.
          </p>
          <Row className="about-graphs">
            <Col>
              <img className="about-hs-graph" src={CollegeChart}></img>
            </Col>
            <Col>
              <img className="about-college-graph" src={HSChart}></img>
            </Col>
          </Row>
        </div>
        <div className="about-insights">
          <h3><b>Insights</b></h3>
          <h5> Prestige, as measured by university and major rankings, seems to drop significantly in importance. What takes its place 
                brings up some disagreement — people considered cultural/social fit and pre-professional opportunities to be important equally. 
          </h5>
          <br></br>
          <h5>However you choose to interpret the above data, it brings up an important point: </h5>
          <br></br>
          <h4 className="about-quote"> <b>You should make your college decision holistically.</b></h4>
          <br></br>
          <h5>As easy as it is to base your choice off of solely rankings, you should consider other factors that will influence your day-to-day 
              happiness. For example, the school’s culture and location will likely influence the types of activities you can engage in outside of 
              the classroom. Similarly, the most prevalent pre-professional opportunities (i.e. clubs, part-time internships) at the school will 
              influence the types of people you meet, the industries you consider working in, and your perspectives on your career. 
          </h5>
          <br></br>
          <h5>This is not to say that rankings are not important — rankings often times are a great proxy for the quality of a school. However, they 
              are not reliable proxies for your day-to-day happiness, and thus your overall chances for personal and professional success. 
          </h5>
          <br></br>
          <h5>We hope that our product helps enlighten these other important factors that you might not easily see on a rankings list. 
              Please let us know if you have any questions in the meantime, and we will be sure to update you when the website is live!
          </h5>
        </div>
      </div>
    );
  }
}

export default About;
