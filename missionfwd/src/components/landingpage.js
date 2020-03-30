import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class LandingPage extends Component{
  render() {
    return(
      <div style = {{width: '100%', margin: 'auto'}}>
        <Grid className = "landing-grid">
          <Cell col={5}>
            <div className="banner-text">
              <h1>Welcome to Mission Forward</h1>
              <hr/>
              <p>
                Hi there! Our mission is to build products and services that will help soon-to-be college students navigate their personal and professional lives post high school.
                <h2> </h2>
                We are starting with a tool to help current high school seniors learn more about what it's like to attend popular colleges from MSJ alumni. To acess this tool and for
                additional updates, please leave your name and email below.
              </p>

              <div className = "wrapper">
              <div className = "form-wrapper">
                <h1>Sign Up</h1>

                <form onSubmit = {this.handleSubmit} noValidate>
                  <div className="firstName">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      placeholder="First Name"
                      type="text"
                      name="firstName"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="lastName">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      placeholder="Last Name"
                      type="text"
                      name="lastName"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="email">
                    <label htmlFor="email">Email</label>
                    <input
                      placeholder="Email"
                      type="email"
                      name="email"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="highschool">
                    <label htmlFor="highschool">High School</label>
                    <input
                      placeholder="Highschool"
                      type="text"
                      name="highschool"
                      noValidate
                      onChange={this.handleChange}
                    />
                  </div>

                  <div className="createAccount">
                    <button type="submit">Create Account</button>
                    <small>Already Have an Account?</small>
                  </div>
                </form>


              </div>
              </div>

            </div>
          </Cell>

          <Cell col={7}>
            <div>
              <img
                src = "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Black_Man_Working_at_his_Desk_Cartoon_Vector.svg/1200px-Black_Man_Working_at_his_Desk_Cartoon_Vector.svg.png"
                alt = "stock"
                className = "stock-image"
              />
            </div>
          </Cell>


        </Grid>

      </div>
    );
  }
}

export default LandingPage;
