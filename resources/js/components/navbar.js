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

  constructor(props) {
    super(props);
    this.state = {
      isLogged: ''
      //isLoggedIn: false,
      //user: {}
    };
  }//\end constructor

    render() {
        let logButton;
          if (sessionStorage.getItem("token-storage") !== null) {
            logButton = (
              <Link className="mx-auto mx-sm-0 navLinked" to='/logout'>Log Out</Link>
            )
          }
          else if (sessionStorage.getItem("token-storage") === null) {
            logButton = (
              <Link className="mx-auto mx-sm-0 navLinked" to='/login'>Log In</Link>
            )
          }
        let addEventButton;
          if (sessionStorage.getItem("token-storage") !== null) {
            addEventButton = (
              <Link className="mx-auto mx-sm-0 navLinked" to='/create-event'>Add Event</Link>
            )
          }
        let addRegisterButton;
          if (sessionStorage.getItem("token-storage") === null) {
            addRegisterButton = (
              <Link className="mx-auto mx-sm-0 navLinked" to='/create-account'>Register</Link>
            )
          }
        return (
            <div>
                <Navbar bg="border-bottom d-flex flex-column flex-sm-row light" variant="light">

                    <Nav className="mr-auto d-flex flex-column flex-sm-row w-100 sm-w-25 justify-content-around">
                        <Link className="mx-sm-0 navLinked" to='/'>Home</Link>
                        <Link className="mx-auto mx-sm-0 navLinked" to='/display-past'>Past Events</Link>
                        { addEventButton }
                        { addRegisterButton }
                        <div className="displayOnlyXs d-flex flex-sm-row flex-column justify-content-around">
                        { logButton }
                        </div>
                    </Nav>

                    <Dropdown className="navLinkedTitle displayOnlySm text-center">
                        <Dropdown.Toggle id="dropdown-basic" >
                            <i className="far fa-user fa-2x "></i>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-center w-100">
                            <Container className="mb-5">Logged in as </Container>
                            <Dropdown.Divider />
                            <div className="mx-auto navLinked w-100">
                        { logButton }
                        </div>
                            {/* <Link className="mx-auto  navLinked w-100" to='/logout'>Log Out</Link> */}
                        </Dropdown.Menu>
                    </Dropdown>


                </Navbar>

            </div>
        );
    }
}
