import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Routes from '../Routes'
import DisplayPast from './display-past';
// import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class NavbarContent extends Component {

    render() {

        return (
            <div>

                <Navbar bg="light border-bottom d-flex flex-column flex-sm-row" variant="light">
                    <Link to='/'>Dab</Link>

                    <Nav className="mr-auto d-flex flex-column flex-sm-row w-100 sm-w-25 justify-content-around">
                        <Link className="mx-sm-0 navLinked" to='/'>Home</Link>
                        <Link className="mx-auto mx-sm-0 navLinked" to='/display-past'>Past Events</Link>
                        <Link className="mx-auto mx-sm-0 navLinked" to='/create-event'>Add Event</Link>
                        <Link className="mx-auto mx-sm-0 navLinked" to='/create-account'>Register</Link>
                        <div className="displayOnlyXs d-flex flex-sm-row flex-column justify-content-around">
                            <Link className="mx-auto mx-sm-0 navLinked" to='/login'>Log In</Link>
                            <Link className="mx-auto mx-sm-0 navLinked" to='/logout'>Log Out</Link>
                        </div>
                    </Nav>

                    <Dropdown className="navLinkedTitle displayOnlySm">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" >
                            <i className="far fa-user fa-2x "></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Container className="mb-5">Logged in as ...</Container>
                            <Dropdown.Divider />
                            <Link className="mx-auto  navLinked" to='/logout w-100'>Log Out</Link>
                        </Dropdown.Menu>
                    </Dropdown>


                </Navbar>

            </div>
        );
    }
}
