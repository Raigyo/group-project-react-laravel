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
    this.state = {
      name: "",
      eventList: [],
      suscribersList: [],
      boxSubscribe : false
    }

  }//\constructor

  setboxSuscribe(props) {
    this.setState({
        boxSubscribe: props
    })
  }

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
  }

/*checkbox suscribe/unsuscrib + road to api*/
  handleChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({[name]: value});
      if (target.checked === true){
        suscribeEvent(this.props.match.params.id);
        this.setboxSuscribe(true);
      }
      else {
        unsuscribeEvent(this.props.match.params.id);
        this.setboxSuscribe(false);
      }
  }//\end fct handleChange

  render() {
    const { eventList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);
    const authorId = this.state.eventList.map(item => item.id);

    let editButton;
    let suscribeButton;
      if (sessionStorage.getItem("user-name-storage") === JSON.stringify(authorArticle[0])) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/edit/"} >Edit this event</Link>
        )
      }
      if (sessionStorage.getItem("token-storage") !== null) {
      suscribeButton = (
        <div className="form-check">
          <input className="form-check-input"
          type="checkbox"
          name="boxSuscribe"
          checked={this.state.boxSubscribe}
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
