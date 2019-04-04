import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import CalendarDemo from './calendar'
import Button from 'react-bootstrap/Button'
import { appAddEvent } from './helpers';

export default class Create extends Component {

  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      description: "",
    };
  }//\end constructohpr

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }//\end fct validateForm

  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }//\end fct handleChange


  handleSubmit() {
    //let myJSON = JSON.stringify(this.state);
    let myJSON = { "name": this.state.name, "date_event": this.state.this.state.date1, "description": this.state.description, "reminder": this.this.state.date2 }
    event.preventDefault()
    appAddEvent(myJSON);
  }//\end fct handleSubmit

  render() {

    return (

      <Form onSubmit={this.handleSubmit} className="m-5">
        <h1>Create new Event</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
          name="name"
          type="text"
          placeholder="your event title"
          onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
          name="description"
          as="textarea" rows="10"
          onChange={this.handleChange}
          />
        </Form.Group>
        <CalendarDemo />
        <Button className="my-3" type="submit">Submit</Button>
      </Form>
    )

  }

}
