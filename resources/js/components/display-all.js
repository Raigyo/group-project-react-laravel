import React, { Component } from 'react'
import { appGetEvent } from './helpers';
import CarouselContent from './carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import axios from 'axios'
import posed from 'react-pose';

const Box = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.025,
    boxShadow: '0px 0px 5px rgba(0,0,0,0.2)',

  },
  press: {

    boxShadow: '0px 0px 2px rgba(0,0,0,0.5)'
  }
});
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

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
devfront
  /*rendering content*/
  render() {
    const { eventList } = this.state;
    return (
      <div>
        <h1 className="mt-2 ml-2">Future Events : </h1>
        <div className="d-flex flex-wrap futureEventsList">
          {this.state.eventList.map(item =>
            <div key={item.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column p-sm-1 p-lg-2 p-0 bg-secondary">
              <div className="border w-100">
                <h1>{item.name}</h1>
                <p>
                  {item.description}
                </p>
                <p>
                  <Link variant="primary" className="btn" to={"/display-event/" + item.id} >Learn more</Link>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
