import React, { Component } from 'react';
import { appGetEventByID } from './helpers'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'

export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList1: null,
    };
  }

  componentDidMount() {
    appGetEventByID(this);
  }

  render() {
    const { eventList1 } = this.state;
    return (
      
      <Jumbotron fluid>
        <Container>
          <h1>{ name }</h1>
          <p>
            This is a modified jumbotron that occupies the entire horizontal space of
            its parent.
          </p>
        </Container>
      </Jumbotron>
    )}
}