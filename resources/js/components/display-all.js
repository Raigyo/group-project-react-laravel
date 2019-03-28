import React, { Component } from 'react';
import { getApiFutureEvents } from './helpers';


export default class DisplayAll extends Component {

  constructor(props) {
      super(props);
      this.state = {
          eventsFuture  : [],
      };//\state
  }//\constructor

  componentDidUpdate() {
    getApiFutureEvents();
  }

  componentDidMount() {
    getApiFutureEvents();
  }

  /*rendering content*/
  render() {
    const {eventsFuture} = this.state;
    return (
      <section id="futureEventsList">
      {eventsFuture.map(eventFuture =>
        <li key = { eventFuture.id } className = 'eventsFuture'>
          <div>
              <div className="content">
                <div className="eventName">{ eventFuture.name }</div>
                <div className="eventDescr">{ eventFuture.shortDescription }</div>
              </div>
          </div>
        </li>)}
      </section>
    )
  }//\rendering
}
