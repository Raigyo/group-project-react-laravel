import React, { Component } from 'react';
import { appGetEventByID } from './helpers';
import { suscribeEvent } from './helpers';
import { unsuscribeEvent } from './helpers';
import CarouselContent from './carousel';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import axios from 'axios';
import posed from 'react-pose';
import PaginatorDemo from './paginators';
import { Paginator } from 'primereact/paginator';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Form from 'react-bootstrap/Form';

export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.checkboxUpdate = this.checkboxUpdate.bind(this);
    this.state = {
      name: "",
      eventList: [],
      suscribersList: [],
      boxSubscribe : false,
    };//\statecheckboxUpdate
  }//\constructor

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
    //this.checkboxUpdate();

  }

/*checkbox suscribe/unsuscrib + road to api*/
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
      if (target.checked === true){
        suscribeEvent(this.props.match.params.id);
      } else {
        unsuscribeEvent(this.props.match.params.id);
      }
  }//\end fct handleChange

/*check if user has already suscribed to teh event*/
  checkboxUpdate(){
    const suscribers = this.state.suscribersList.map(item => item.username);
    console.log(this.state.suscribersList)
    const userName = sessionStorage.getItem("user-name-storage");
    console.log(userName)
    if (suscribers.indexOf(userName) > -1) {

      this.state.boxSuscribe =true;
    }
    else{
      this.state.boxSuscribe =false;
    }
  }


  render() {
    const { eventList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);
    const authorId = this.state.eventList.map(item => item.id);
    this.checkboxUpdate()
    let editButton;
    let suscribeButton;
      if (sessionStorage.getItem("user-name-storage") === JSON.stringify(authorArticle[0])) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/edit/" + authorId} >Edit this event</Link>
        )
      }
      if (sessionStorage.getItem("token-storage") !== null) {
      suscribeButton = (
        <div className="form-check">
          <input className="form-check-input"
          type="checkbox"
          name="boxSuscribe"
          checked={this.checkboxUpdate}
          onChange={this.handleChange} />
          <label className="form-check-label">Suscribe to this event</label>
          </div>
        )
      }
    return (
      <div>
        <h1 className="mt-2 ml-2">Selected Event : </h1>
          <div className="d-flex flex-wrap futureEventsList">
            {this.state.eventList.map(item =>
              <div key={0} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column">
                <p className="border boxDate">{item.date_event}</p>
                  <h1 className="eventTitle ">{item.name}</h1>
                  <div className="border boxDescription">
                    {item.description}
                  </div>
                <p>Author: {item.author}</p>
                <div className="p-col-12 mt-3">

                    <div>{ suscribeButton }</div>

                </div>
                <div>{ editButton }</div>
              </div>
            )}
          </div>

        </div>
    )
  }
}
