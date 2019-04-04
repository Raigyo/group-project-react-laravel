import React, { Component } from 'react';
import { appGetEventByID } from './helpers';

export default class DisplayEvent extends Component {

  componentDidMount() {
    appGetEventByID(this.props.match.params.id);
    }

  render() {
    console.log(this.props.match.params.id);
    return (
      <h1>DisplayEvent</h1>

    )
  }

}
