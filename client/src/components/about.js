import React, { Component } from 'react';
import {Row, Col, Button} from 'react-bootstrap';
import {SocialMediaIconsReact} from 'social-media-icons-react';
import CollegeChart from '../img/about-charts/about-college-chart.png';
import HSChart from '../img/about-charts/about-hs-chart.png';
import BrianPic from '../img/members/brian-pic.png';
import SaagarPic from '../img/members/saagar-pic.jpg';
import ShivamPic from '../img/members/shivam-pic.png';

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
          <div className="about-team-button-div">
            <Button className="about-team-button" href="#team">Meet the Team</Button>
          </div>
        </div>

        <div id="team" className="about-team">
          <h1><b>The Team</b></h1>
        
          <Row className="about-member-pics">
            <Col md={4} className="about-member-info">
              <img className="about-member-pic" src={BrianPic}></img>
              <div className="about-member-text">
                <h3><b>Brian Chou</b></h3>
                <h4>University of California, Irvine</h4>
                <h4>Computer Science, 2020</h4>
                <div className="about-socials">
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#007FB4" borderWidth="0" borderStyle="solid" 
                                        icon="linkedin" iconColor="white" backgroundColor="#007FB4" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.linkedin.com/in/brianchou121/"/>
                  </div>
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#3C719D" borderWidth="0" borderStyle="solid" 
                                        icon="instagram" iconColor="white" backgroundColor="#3C719D" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.instagram.com/bchouz/"/>
                  </div>
                </div>

              </div>
            </Col>

            <Col md={4} className="about-member-info">
              <img className="about-member-pic" src={SaagarPic}></img>
              <div className="about-member-text">
                <h3><b>Saagar Parikh</b></h3>
                <h4>University of California, Santa Barbara</h4>
                <h4>Computer Science, 2020</h4>
                <div className="about-socials">
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#007FB4" borderWidth="0" borderStyle="solid" 
                                        icon="linkedin" iconColor="white" backgroundColor="#007FB4" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.linkedin.com/in/saagarparikh/"/>
                  </div>
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#3C719D" borderWidth="0" borderStyle="solid" 
                                        icon="instagram" iconColor="white" backgroundColor="#3C719D" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.instagram.com/saagar.pdf/"/>
                  </div>
                </div>
              </div>
            </Col>

            <Col md={4} className="about-member-info"> 
              <img className="about-member-pic" src={ShivamPic}></img>
              <div className="about-member-text">
                <h3><b>Shivam Patel</b></h3>
                <h4>University of Michigan</h4>
                <h4>Business Administration, 2020</h4>
                <div className="about-socials">
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#007FB4" borderWidth="0" borderStyle="solid" 
                                        icon="linkedin" iconColor="white" backgroundColor="#007FB4" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.linkedin.com/in/patelshivam845/"/>
                  </div>
                  <div className="about-social">
                    <SocialMediaIconsReact borderColor="#3C719D" borderWidth="0" borderStyle="solid" 
                                        icon="instagram" iconColor="white" backgroundColor="#3C719D" 
                                        iconSize="1" roundness="50%" size="40" 
                                        url="https://www.instagram.com/phivamsatel/"/>
                  </div>
                </div>
              </div>
            </Col>

          </Row>
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
            <Col className="about-graph">
              <img className="about-hs-graph" src={CollegeChart}></img>
            </Col>
            <Col className="about-graph">
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
              Please let us know if you have any questions in the meantime.
          </h5>
        </div>

      </div>
    );
  }
}

export default About;
