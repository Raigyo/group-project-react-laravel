import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Dropdown from 'react-bootstrap/Dropdown'
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import Header from './header';

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
    let userName;
    if (sessionStorage.getItem("token-storage") !== null) {
      userName = (
        "Logged as: " + sessionStorage.getItem("user-name-storage")
      )
    }
    else if (sessionStorage.getItem("token-storage") === null) {
      userName = (
        "Please login"
      )
    }
    let addEventButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      addEventButton = (
        <Link className="mx-auto mx-sm-0 navLinked" to='/create-event'>Add Event</Link>
      )
    }
    let myEventButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      myEventButton = (
        <Link className="mx-auto mx-sm-0 navLinked" to='/my-events'>My Events</Link>
      )
    }
    let myParticipationButton;
    if (sessionStorage.getItem("token-storage") !== null) {
      myParticipationButton = (
        <Link className="mx-auto mx-sm-0 navLinked" to='/my-participations'>My Participations</Link>
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
          <Link to="/">
            <Header />
          </Link>
          <Nav className="mr-auto d-flex flex-column flex-sm-row w-100 sm-w-25 justify-content-around">

            <Link className="mx-auto mx-sm-0 navLinked" to='/'>Home</Link>
            <Link className="mx-auto mx-sm-0 navLinked" to='/display-past'>Past Events</Link>
            {addEventButton}
            {myEventButton}
            {myParticipationButton}
            {addRegisterButton}
            <div className="displayOnlyXs d-flex flex-sm-row flex-column justify-content-around">
              {logButton}
            </div>
          </Nav>

          <Dropdown className="navLinkedTitle displayOnlySm text-center">
            <Dropdown.Toggle id="dropdown-basic" >
              <i className="far fa-user fa-2x "></i>
            </Dropdown.Toggle>

            <Dropdown.Menu className="dropdown-menu dropdown-menu-right text-center w-100">
              <Container className="mb-5">{userName}</Container>
              <Dropdown.Divider />
              <div className="mx-auto navLinked w-100">
                {logButton}
              </div>
              {/* <Link className="mx-auto  navLinked w-100" to='/logout'>Log Out</Link> */}
            </Dropdown.Menu>
          </Dropdown>


        </Navbar>

      </div>
    );
  }
}
