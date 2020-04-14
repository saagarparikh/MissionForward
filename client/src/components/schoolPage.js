import React, { Component } from 'react';
import JsonFile from '../dummyQuestions.json'

import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import {replace} from 'lodash';

import {Row, Col, Nav, Tab} from 'react-bootstrap'


class SchoolPage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
      school: ''
    };
    this.onSelectTab = this.onSelectTab.bind(this);
  }

  componentDidMount () {
    const { school } = this.props.match.params;
    console.log(school)
    this.setState({
      school: school
  });
  }

  onSelectTab (tabID) {
    console.log(tabID);
    this.setState({
      activeTab: tabID
  });
  }

  toggleCategories() {
    console.log(this.state.activeTab)
    if(this.state.activeTab == 0) {
      return(
        <div className="school-question-boxes">
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">How would you describe the quality of academic instruction (e.g. number of students, types of teachers, registration)?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                {
                JsonFile.answers.map((a) => {
                  if(a.id === 0) {
                return(
                  <div>
                    {
                      a.answers.map((a) => {
                        return(
                          <div>
                            <b>"</b>
                            {a.answers}
                            <b>"</b>
                          </div>
                        ); })
                    }
                  </div>
                );} 
              })
              }
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What types of resources (e.g. clubs, programs, career fairs) does your school have to help with internships, career planning, and on-campus jobs (e.g. research)?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">How flexible is your school with switching career paths and majors?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    } else if(this.state.activeTab == 1) {
      return(
        <div className="school-question-boxes">
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Describe your experience with school facilities (e.g. dining halls, dorms, athletic facilities).</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Describe the student body culture (e.g. atmosphere, social dynamics) in the way you experienced it.</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What clubs or organizations did you get involved with (e.g. Greek life, professional groups, etc)? What was your experience like?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What types of events were held both on-campus and off-campus?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

        </div>
      )
    } else if(this.state.activeTab == 2) {
      return(
        <div className="school-question-boxes">
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What was the hardest, or worst, aspect of going to your school?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What specific aspect of your school are you most grateful for?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">When you were a senior in high school, what were the TWO main factors you considered when making a decision on where to attend college?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Now looking back at your college experience, what TWO factors do you wish you had made your decision off of?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What are things you wish you had known about your school before you chose it?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What other information would you give an MSJ senior considering to attend your school?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    } else if(this.state.activeTab == 3) {
      return(
        <div className="school-question-boxes">
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">How would you describe the quality of academic instruction (e.g. number of students, types of teachers, registration)?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What types of resources (e.g. clubs, programs, career fairs) does your school have to help with internships, career planning, and on-campus jobs (e.g. research)?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">How flexible is your school with switching career paths and majors?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Describe your experience with school facilities (e.g. dining halls, dorms, athletic facilities).</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Describe the student body culture (e.g. atmosphere, social dynamics) in the way you experienced it.</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What clubs or organizations did you get involved with (e.g. Greek life, professional groups, etc)? What was your experience like?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What types of events were held both on-campus and off-campus?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What was the hardest, or worst, aspect of going to your school?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>

            </ExpansionPanelDetails>
          </ExpansionPanel>
          
          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What specific aspect of your school are you most grateful for?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">When you were a senior in high school, what were the TWO main factors you considered when making a decision on where to attend college?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">Now looking back at your college experience, what TWO factors do you wish you had made your decision off of?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What are things you wish you had known about your school before you chose it?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>

          <ExpansionPanel>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <div className="school-question" variant="h5">What other information would you give an MSJ senior considering to attend your school?</div>
            </ExpansionPanelSummary>
            <ExpansionPanelDetails>
              <div>
                <div><b>Answer 1: </b>shivam is cool but not as cool as brian</div>
                <div><b>Answer 2: </b>saagar is cooler than shivam</div>
              </div>
            </ExpansionPanelDetails>
          </ExpansionPanel>
        </div>
      )
    }
  }

  render() {
    return(
      <div className="school-page">
        <h2 className="school-title"><b>{replace(this.state.school,/-/g," ")}</b></h2>

        <Tab.Container className="category-tabs" defaultActiveKey={0} onSelect={this.onSelectTab}>
          <Row>
            <Col className="question-tabs">
              <Nav variant="pills" className="flex-column" > 
                <Nav.Item>
                  <Nav.Link className="question-tab" eventKey={0}>Academic</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="question-tab" eventKey={1}>Lifestyle</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="question-tab" eventKey={2}>Reflection</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link className="question-tab" eventKey={3}>View All</Nav.Link>
                </Nav.Item>
              </Nav>
            </Col>
            <Col className="school-questions"sm={9}>
              <Tab.Content>
                <Tab.Pane eventKey={0}>
                  {this.toggleCategories()}
                </Tab.Pane>
                <Tab.Pane eventKey={1}>
                  {this.toggleCategories()}
                </Tab.Pane>
                <Tab.Pane eventKey={2}>
                  {this.toggleCategories()}
                </Tab.Pane>
                <Tab.Pane eventKey={3}>
                  {this.toggleCategories()}
                </Tab.Pane>
              </Tab.Content>
            </Col>
          </Row>
        </Tab.Container>  
        
      </div>
    );
  }
}

export default SchoolPage;
