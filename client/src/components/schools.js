import React, { Component }  from 'react';
import JsonFile from '../dummySchools.json'
import school from './schoolPage'
import { Link, NavLink } from 'react-router-dom';
import {replace} from 'lodash';
import {InputGroup, FormControl, Card, Row, Col, Button} from 'react-bootstrap'
import TopCal from '../img/school-logos/uc-berkeley-logo.png';
import TopUCD from '../img/school-logos/uc-davis-logo.png';
import TopUCSB from '../img/school-logos/uc-santa-barbara-logo.png';

import ReactSearchBox from 'react-search-box';


class schoolList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            curr_school: "",
            data : []
        };
    }

    componentDidMount(){
        JsonFile.schools.map((value) => {
            this.state.data.push({value});
        });
    };

    onSelectSearch = (e) => {
        this.setState({
            curr_school: e.value,
        });
        window.location.href="/schools/" + replace(e.value, /-/g, " ")
    };

    onClickSchool = (e) => {
        this.setState({
            curr_school: e.target.text,
        });
    };
    
    render() {
        return(
            <div className="schools-page">
                <div className="schools-title">
                    <h1>
                        <b>Colleges &amp; Universities</b>
                    </h1>
                    <h5>
                        Begin your journey today.
                    </h5>

                    <ReactSearchBox className="schools-search"
                        placeholder="Enter a school"
                        value=""
                        data={this.state.data}
                        callback={record => console.log(record)}
                        onSelect={this.onSelectSearch}
                    />
                    <a className="schools-list-button" href="#list">Click here to see our list of currently supported schools</a>

                </div>

                <div className="top-schools-cards-background">
                    <h2>Top Responses From Our Alumni</h2>
                    <Row className="top-schools-cards">
                        <Col sm={4}>
                            <Link to={"/schools/" + "University-of-California-Berkeley"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                <Card className="top-schools-card">
                                    <Card.Img variant="top" src={TopCal} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California, Berkeley</Card.Title>
                                    </Card.Body>
                                </Card> 
                            </Link>
                        </Col>

                        <Col sm={4}>
                            <Link to={"/schools/" + "University-of-California-Berkeley"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                <Card className="top-schools-card">
                                    <Card.Img variant="top" src={TopUCD} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California, Davis</Card.Title>
                                    </Card.Body>
                                </Card> 
                            </Link>
                        </Col>

                        <Col sm={4}>
                            <Link to={"/schools/" + "University-of-California-Berkeley"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                <Card className="top-schools-card">
                                    <Card.Img variant="top" src={TopUCSB} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California, Santa Barbara</Card.Title>
                                    </Card.Body>
                                </Card> 
                            </Link>
                        </Col>
                    </Row>
                </div>

            
                <div id="list" className="schools-list">
                    <h3>Currently Supported Schools</h3>
                    {JsonFile.schools.map((s) => {
                        return(
                        <div >
                            <Link className="schools-name" text={s} to={"/schools/" + replace(s, /-/g, " ")} onClick={this.onClickSchool}>{s}</Link>
                        </div>
                        );
                    })}
                </div>
            </div>
        );
    }
}

export default schoolList; 