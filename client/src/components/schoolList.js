import React, { Component }  from 'react';
import JsonFile from '../dummySchools.json'
import { Switch, Route } from 'react-router-dom';
import school from './schoolPage'
import { Link } from 'react-router-dom';
import axios from 'axios';

class schoolList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            curr_school: "",
            schools: [],
        };

        axios.get('http://localhost:5000/alumni-data/get-schools')
                .then(response => {
                  this.setState({
                      schools: response.data.schools
                  })
                })
                .catch((error) => {
                  console.log(error);
                });
    }

    onClickSchool = (e) => {
        this.setState({
            curr_school: e.target.text,
        });
    };

    render() {
        return(
            <div>
                <h2 className="main-school-page-title">
                   <b>COLLEGES &amp; UNIVERSITIES</b>
                </h2>
                <div className="main-school-list">
                    {this.state.schools.map((s) => {
                        return(
                        <div >
                            <Link className="school-name" text={s} to={"/schoolList/" + s} onClick={this.onClickSchool}>{s}</Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default schoolList;
