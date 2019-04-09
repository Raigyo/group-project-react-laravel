import React, { Component } from 'react';
import logo from './eventdablogo.png';

export default class Header extends Component {
  render() {
    return (
      
        <div className="logo">
          <img src={logo} width="50" height="50" />
        </div>
    );
  }
} 