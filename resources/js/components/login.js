import React, { Component } from 'react';
import { appLogin } from './helpers';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = {
      email: "",
      password: "",
      redirect: false,
      //isLoggedIn: false,
      //user: {}
    };
    localStorage.setItem("redirection", JSON.stringify("false"));
  }//\end constructohpr

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }//\end fct validateForm

  handleChange(event) {
      this.setState({
        [event.target.id]: event.target.value
      })
  }//\end fct handleChange

  handleSubmit() {
      //let myJSON = JSON.stringify(this.state);

      let myJSON = {"email":this.state.email,"password":this.state.password}
      event.preventDefault();
      appLogin(myJSON);

      //this.setState({ redirect: localStorage.setItem('redirect')});
  }//\end fct handleSubmit

  render() {

    const { redirect } = this.state;

     if (redirect) {
       return <Redirect to='/'/>;
     }
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <label>Email</label>
            <input
              autoComplete="true"
              id="email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            <label>Password</label>
            <input
              autoComplete="false"
              id="password"
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          <button
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    );
  }//\end render
}//\end class Login
