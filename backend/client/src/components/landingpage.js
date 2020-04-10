import React, { Component } from 'react';
import Register from './register';
import { Grid, Cell, Card, CardTitle, CardText, CardMenu, IconButton } from 'react-mdl';
class LandingPage extends Component{
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={5}>
            <div className="banner-text">
              <h2>Welcome to Mission Forward</h2>
              <hr/>
              <h5>
                Hi there! Our mission is to build products and services that will help soon-to-be college students navigate their personal and professional lives post high school.
                <h2> </h2>
                We are starting with a tool to help current high school seniors learn more about what it's like to attend popular colleges from MSJ alumni. To acess this tool and for
                additional updates, please leave your name and email below.
              </h5>
              <Register className = "register"></Register>

            </div>
          </Cell>

          <Cell col={7}>
            <div className = "cards">
              <Card style={{minWidth: '450', margin: 'auto', marginTop: '45x'}}>
                <CardTitle style={{color: '#fff', height: '275px', background: 'url(https://cdn3.iconfinder.com/data/icons/award-gray-set-1/100/award-09-512.png) center / cover'}} ></CardTitle>
                <CardText className = "card-text">
                  100+ MSJ Class of 2016 College Alumni
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              <Card  style={{minWidth: '450', margin: 'auto', marginTop: '45x'}}>
                <CardTitle style={{color: '#fff', height: '275px', background: 'url(https://www.shareicon.net/data/512x512/2016/08/04/806673_school_512x512.png) center / cover'}} ></CardTitle>
                <CardText className = "card-text">
                  20+ Supported Universities
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>

              <Card  style={{minWidth: '450', margin: 'auto', marginTop: '45x'}}>
                <CardTitle style={{color: '#fff', height: '275px', background: 'url(https://gopublicschoolswcc.org/wp-content/uploads/2017/01/about-the-data-icon.png) center / cover'}} ></CardTitle>
                <CardText className = "card-text">
                  Learn from first-hand college experiences
                </CardText>
                <CardMenu style={{color: '#fff'}}>
                  <IconButton name="share" />
                </CardMenu>
              </Card>
            </div>


          </Cell>




        </Grid>

      </div>
    );
  }
}

export default LandingPage;