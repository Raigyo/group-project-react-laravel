import React, { Component } from 'react';
import { appLogin } from './helpers';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: ""
      //redirect: false
    };
    sessionStorage.setItem("redirection", JSON.stringify("false"));
  }//\end constructor

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }//\end fct validateForm

  handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
  }//\end fct handleChange

  handleSubmit() {
    //let myJSON = JSON.stringify(this.state);
    let myJSON = { "email": this.state.email, "password": this.state.password }
    event.preventDefault()
    appLogin(myJSON);
  }//\end fct handleSubmit

  render() {
    return (
      <div className="Login m-5">
        <Form onSubmit={this.handleSubmit}>
        <h1>Login</h1>
          <Form.Group controlId="formBasicEmail">
            <Form.Label >Email address</Form.Label>
            <Form.Control
            autoComplete="true"
            name="email"
            type="email"
            value={this.state.email}
            onChange={this.handleChange}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
    </Form.Text>
          </Form.Group>
          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
            autoComplete="false"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
            type="password"
            />
          </Form.Group>
          <Button  disabled={!this.validateForm()}
            type="submit">
            Submit
  </Button>
        </Form>
      </div>
    );
  }//\end render
}//\end class Login