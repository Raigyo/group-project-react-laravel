import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'


export default class Create extends Component {
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
