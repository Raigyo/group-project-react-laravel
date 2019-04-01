import React, { Component } from 'react';
import { appGetEvent } from './helpers';


export default class DisplayAll extends Component {

  constructor(props) {
      super(props);
      this.state = {
          eventList: [],
      };//\state
  }//\constructor

  /*componentDidUpdate() {
    getApiFutureEvents();
  }*/

  componentDidMount() {
    appGetEvent();
  }

  /*rendering content*/
  render() {
    const {eventList} = this.state;
    return (
      <section id="futureEventsList">
      {eventList.map(eventList =>
        <li key = { eventList.id } className = 'eventsFuture'>
          <div>
              <div className="content">
                <div className="eventName">{ eventList.name }</div>
                <div className="eventDescr">{ eventList.description }</div>
              </div>
          </div>
        </li>)}
      </section>
    )
  }//\rendering
}//\class DisplayAll
