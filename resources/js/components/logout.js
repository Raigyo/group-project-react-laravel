import React, { Component } from 'react';
import { appLogout } from './helpers';

export default class Logout extends Component {

  render() {
    appLogout();
    return (
    <h1></h1>
    )
  }
}
