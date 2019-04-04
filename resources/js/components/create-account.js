import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { appRegister } from './helpers';
import { Route, Redirect } from 'react-router'

export default class CreateAccount extends Component {

  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      name: "",
      email: "",
      password: "",
      redirect: false,
      //isLoggedIn: false,
      //user: {}
    };
  }//\end constructohpr

  validateForm() {
    return this.state.name.length > 0 && this.state.email.length > 0 && this.state.password.length > 0;
  }//\end fct validateForm

  handleChange(event) {
      this.setState({
        [event.target.id]: event.target.value
      })
  }//\end fct handleChange

  handleSubmit() {
      let myJSON = {"name":this.state.name,"email":this.state.email,"password":this.state.password}
      event.preventDefault();
      appRegister(myJSON);
      //this.setState({ redirect: true });
  }//\end fct handleSubmit

  render() {
    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }

    return (

      <Form className="m-5" onSubmit={this.handleSubmit}>
        <h1>CreateAccount</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Name</Form.Label>
          <input autoComplete="true" className="form-control" id="name" type="text" autoComplete="true" placeholder="your name" value={this.state.name} onChange={this.handleChange} />
        </Form.Group>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <input autoComplete="true" className="form-control" id="email" type="email" autoComplete="true" placeholder="Enter email" value={this.state.email} onChange={this.handleChange} />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
    </Form.Text>
        </Form.Group>

        <Form.Group controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <input className="form-control" id="password" type="password" autoComplete="false" placeholder="Password" value={this.state.password} onChange={this.handleChange}/>
        </Form.Group>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <button disabled={!this.validateForm()} variant="primary" type="submit">
          Submit
        </button>
      </Form>
    )
  }
}
