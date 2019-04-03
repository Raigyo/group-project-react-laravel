import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import CarouselContent from './carousel'

import DisplayAll from './display-all';

export default class DisplayPast extends Component {

  render() {
    
    return (
      <div>
        <div>
          <CarouselContent />
        </div>
        <DisplayAll />
      </div>
    )
  }
}

