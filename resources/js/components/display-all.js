import React, { Component } from 'react';
import { getApiFutureEvents } from './helpers';


export default class DisplayAll extends Component {

  constructor(props) {
      super(props);
      this.state = {
          characters: [],
      };//\state
  }//\constructor

  /*componentDidUpdate() {
    getApiFutureEvents();
  }*/

  componentDidMount() {
    getApiFutureEvents(this);
  }

  /*rendering content*/
  render() {
    const {characters} = this.state;
    console.log("characters: "+characters);
    return (
      <section id="futureEventsList">
      {characters.map(character =>
        <li key = { character.id } className = 'eventsFuture'>
          <div>
              <div className="content">
                <div className="eventName">{ character.name }</div>
                <div className="eventDescr">{ character.shortDescription }</div>
              </div>
          </div>
        </li>)}
      </section>
    )
  }//\rendering
}
