import React, { Component } from 'react';
import { appLogout } from './helpers';

export default class Logout extends Component {
componentDidMount() {
    let myJSON = {};
    appLogout(myJSON);
}
  render() {
    return (
      <p>Log out</p>
  )

  }

}
