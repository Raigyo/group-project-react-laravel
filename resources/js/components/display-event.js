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
    };//\state
  }//\constructor

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
  }

  render() {
    const { eventList } = this.state;
    console.log("user-id: "+JSON.parse(sessionStorage.getItem("user-id-storage")));
    console.log("author: "+this.state.eventList);
    return (
      <div>
        <h1 className="mt-2 ml-2">Future Events : </h1>
          <div>
            {this.state.eventList.map(item =>
              <div key={item.id} className="w-100  ">

                <p className="border">{item.date_event}</p>
                  <h1 className="text-center">{item.name}</h1>
                  <div className="border">
                    {item.description}
                  </div>
              </div>
            )}
          </div>

        </div>
    )
  }
}
