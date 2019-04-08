import React, { Component } from 'react';
import { appGetEventByID } from './helpers'
import CarouselContent from './carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import posed from 'react-pose';
import PaginatorDemo from './paginators';
import { Paginator } from 'primereact/paginator';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'


export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      eventList: [],
      suscribersList: [],
    };//\state
  }//\constructor

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
  }

  render() {
    const { eventList } = this.state;
    //console.log("user-id: "+JSON.parse(sessionStorage.getItem("user-id-storage")));
    //console.log("author: "+this.state.eventList);
    return (
      <div>
        <h1 className="mt-2 ml-2">Future Events : </h1>
          <div className="d-flex flex-wrap futureEventsList">
            {this.state.eventList.map(item =>
              <div key={item.name} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column">
                <p className="border boxDate">{item.date_event}</p>
                  <h1 className="eventTitle ">{item.name}</h1>
                  <div className="border boxDescription">
                    {item.description}
                  </div>
                <p>Author: {item.author}</p>
              </div>
            )}
          </div>
        </div>
    )
  }
}
