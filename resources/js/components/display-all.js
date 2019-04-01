import React, { Component } from 'react';
import { appGetEvent } from './helpers';
import axios from 'axios';


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
    appGetEvent(this);
  }

  /*rendering content*/
  render() {
    const {eventList} = this.state;
    console.log("eventList:"+JSON.stringify(eventList));
    return (
      <section id="futureEventsList">
      {this.state.eventList.map(item =>
        <li key = { item.id } className = 'eventsFuture'>
          <div>
              <div className="content">
                <div className="eventName">{ item.name }</div>
                <div className="eventDescr">{ item.description }</div>
              </div>
          </div>
        </li>)}
      </section>
    )
  }//\rendering
}//\class DisplayAll
