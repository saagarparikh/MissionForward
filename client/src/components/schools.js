import React, { Component }  from 'react';
import JsonFile from '../dummySchools.json'
import school from './schoolPage'
import { Link, NavLink } from 'react-router-dom';
import {replace} from 'lodash';
import {InputGroup, FormControl, Card, Row, Col, Button, CardDeck, OverlayTrigger, Tooltip} from 'react-bootstrap'
import TopCal from '../img/school-logos/uc-berkeley-logo.png';
import {InfoCircle} from 'react-bootstrap-icons'
import TopUCD from '../img/school-logos/uc-davis-logo.png';
import TopUCSB from '../img/school-logos/uc-santa-barbara-logo.png';

import ReactSearchBox from 'react-search-box';
import axios from 'axios';


class schoolList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            curr_school: "",
            data : [],
            schools : []
        };

        axios.get('/alumni-data/get-schools/')
            .then(response => {
                this.setState({
                    schools: response.data.schools
                })
            })
            .catch((error) => {
                console.log(error);
            });

    }

    iterateSchools = () => {
        console.log("in iterateschools")
        for (var i in this.state.schools) {
            var current = {value: this.state.schools[i]};
            this.state.data.push(current)
        }
    };

    onSelectSearch = (e) => {
        this.setState({
            curr_school: e.value,
        });
        window.location.href="/schools/" + e.value
    };

    onClickSchool = (e) => {
        this.setState({
            curr_school: e.target.text,
        });
    };

    onToolTip = (props) => {
        return(
            <Tooltip {...props}>
                If your school is not listed, reach out to us and let us know by clicking on the right!
            </Tooltip>
        );
    }

    render() {
        this.iterateSchools();
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
                        <CardDeck>
                            <Card className="top-schools-card">
                                <Link to={"/schools/" + "University of California-Berkeley"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                    <Card.Img variant="top" src={TopCal} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California-Berkeley</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                           
                            <Card className="top-schools-card">
                                <Link to={"/schools/" + "University of California-Davis"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                    <Card.Img variant="top" src={TopUCD} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California-Davis</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                    
                            <Card className="top-schools-card">
                                <Link to={"/schools/" + "University of California-Santa Barbara"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                                    <Card.Img variant="top" src={TopUCSB} />
                                    <Card.Body>
                                        <Card.Title className="top-schools-card-text">University of California-Santa Barbara</Card.Title>
                                    </Card.Body>
                                </Link>
                            </Card>
                            
                        </CardDeck>
                    </Row>
                </div>


                <div id="list" className="schools-list">
                    <h3>Currently Supported Schools</h3>
                    {this.state.schools.map((s) => {
                        return(
                        <div >
                            <Link className="schools-name" text={s} to={"/schools/" + s} onClick={this.onClickSchool}>{s}</Link>
                        </div>
                        );
                    })}
                </div>

                <div className="schools-request">
                    <OverlayTrigger
                        placement="left"
                        overlay={this.onToolTip}
                    >  
                        <div className="schools-request-icon-back">
                            <InfoCircle className="schools-request-info-icon"/>
                        </div>
                    </OverlayTrigger>

                    
                    <Link to={"/contact"} onClick={this.onClickSchool} style={{textDecoration: 'none'}}>
                        <Button className="schools-request-button">Request School</Button>
                    </Link>
                </div>

            </div>
        );
    }
}

export default schoolList;
