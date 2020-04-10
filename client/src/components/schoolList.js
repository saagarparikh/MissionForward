import React, { Component }  from 'react';
import JsonFile from '../dummySchools.json'
import { Switch, Route } from 'react-router-dom';
import school from './schoolPage'
import { Link } from 'react-router-dom';

class schoolList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            curr_school: "",
        };
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
                    {JsonFile.schools.map((s) => {
                        return(
                        <div >
                            <Link className="school-name" text={s} to={"/schoolList/" + s.replace(/\s+/g, '-')} onClick={this.onClickSchool}>{s}</Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default schoolList; 