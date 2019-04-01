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
                    <Navbar.Brand><Link to='/'>Dab</Link></Navbar.Brand>

                    <Nav className="mr-auto d-flex flex-column flex-sm-row w-100 sm-w-25">
                        <Nav.Link><Link className="navLinked w-100" to='/display-all'>Events</Link></Nav.Link>
                        <Nav.Link><Link className="mx-auto mx-sm-0 navLinked" to='/display-past'>Past Events</Link></Nav.Link>
                        <Nav.Link><Link className="mx-auto mx-sm-0 navLinked" to='/create-event'>Add Event</Link></Nav.Link>
                        <Nav.Link><Link className="mx-auto mx-sm-0 navLinked" to='/create-account'>Register</Link></Nav.Link>
                        <div className="displayOnlyXs">
                        <Nav.Link><Link className="mx-auto mx-sm-0 navLinked" to='/login'>Log In</Link></Nav.Link>
                        <Nav.Link><Link className="mx-auto mx-sm-0 navLinked" to='/logout'>Log Out</Link></Nav.Link>
                        </div>
                    </Nav>

                    <Dropdown className="navLinkedTitle displayOnlySm">
                        <Dropdown.Toggle variant="light" id="dropdown-basic" >
                            <i className="far fa-user fa-2x "></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                            <Container className="mb-5">Logged in as ...</Container>
                            <Dropdown.Divider />
                            <Dropdown.Item href="#/action-2"><Link className="mx-auto mx-sm-0 navLinked" to='/logout'>Log Out</Link></Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>


                </Navbar>

            </div>
        );
    }
}