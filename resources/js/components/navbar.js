import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/Form'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
// import { HashRouter as Router, Route, Link } from "react-router-dom";

export default class NavbarContent extends Component {

    render() {

        return (
            <div>
                <Navbar bg="light border-bottom mb-5 d-flex flex-column flex-sm-row" variant="light">
                    <Navbar.Brand href="#home">Dab</Navbar.Brand>
                    <Nav className="mr-auto d-flex flex-column flex-sm-row w-100 sm-w-25">
                        <Nav.Link href="#home" className="mx-auto mx-sm-0 navLinked">Events</Nav.Link>
                        <Nav.Link href="#features" className="mx-auto mx-sm-0 navLinked">Past Events</Nav.Link>
                        <Nav.Link href="#pricing" className="mx-auto mx-sm-0 navLinked">Add Event</Nav.Link>
                        <Nav.Link href="#pricing" className="mx-auto mx-sm-0 navLinked">Register</Nav.Link>
                        <div className="displayOnlyXs">
                            <Nav.Link href="#pricing" className="mx-auto mx-sm-0 navLinked">Log In</Nav.Link>
                            <Nav.Link href="#pricing" className="mx-auto mx-sm-0 navLinked">Log Out</Nav.Link>
                        </div>
                    </Nav>
                    
                        <Dropdown className="navLinkedTitle displayOnlySm">
                            <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                <i className="far fa-user fa-2x "></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Container className="mb-5">Logged in as ...</Container>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   

                </Navbar>
            </div>
        );
    }
}