import React, { Component } from 'react'
import { appGetEvent } from './helpers';
import CarouselContent from './carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import axios from 'axios'

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
    console.log("token-storage: "+JSON.parse(localStorage.getItem("token-storage")));
    console.log("email-storage: "+JSON.parse(localStorage.getItem("email-storage")));
  }

  /*rendering content*/
  render() {
    const { eventList } = this.state;
    return (
      <div>
        <h1 className="mt-2 ml-2">Future Events : </h1>
        <div className="d-flex flex-wrap futureEventsList">
          {this.state.eventList.map(item =>
            <div key={item.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column p-sm-1 p-lg-2 p-0">
              <div className="border w-100">
                <h1>{item.name}</h1>
                <p>
                  {item.description}
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
