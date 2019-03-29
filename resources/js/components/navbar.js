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
                <Navbar bg="light border-bottom" variant="light">
                    <Navbar.Brand href="#home">Dab</Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                    </Nav>
                    
                        <Dropdown>
                            <Dropdown.Toggle variant="light" id="dropdown-basic" >
                                <i class="far fa-user fa-2x "></i>
                            </Dropdown.Toggle>

                            <Dropdown.Menu className="dropdown-menu dropdown-menu-right">
                                <Container className ="mb-5">Logged in as ...</Container>
                                <Dropdown.Divider />
                                <Dropdown.Item href="#/action-2">Log Out</Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                   
                </Navbar>
            </div>
        );
    }
}