import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


export default class Create extends Component {

  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      date_event: "",
      description: "",
      reminder: "",
      //isLoggedIn: false,
      //user: {}
    };
  }//\end constructohpr

  render() {
    return (
      <Form className="m-5">
        <h1>Create new Event</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="your event title" />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows="3" />
        </Form.Group>
      </Form>
    )

  }

}
