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
      boxSuscribe: false
    };//\state
  }//\constructor

  componentDidMount() {
    appGetEventByID(this.props.match.params.id, this);
  }

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

  render() {
    const { eventList } = this.state;
    const authorArticle = this.state.eventList.map(item => item.author);
    const authorId = this.state.eventList.map(item => item.id);
    let editButton;
      if (sessionStorage.getItem("user-name-storage") === JSON.stringify(authorArticle[0])) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/edit/" + authorId} >Edit this event</Link>
        )
      }

    return (
      <div className="m-2 m-sm-5 p-2 p-xl-5">
        
          <div>
            {this.state.eventList.map(item =>
              <div key={item.id} className="w-100  ">

                
                  <h1 className="text-center border-bottom">{item.name}</h1>
                  <h4 className="boxDate text-center">{item.date_event}</h4>
                  <div className="imgDivSingle mt-5">
                <img className="imgDisplaySingle border ml-auto mr-auto" src={item.image_url} alt="image event"/>
                </div>
                  <div className="mt-5 text-center boxDescriptionSingle">
                    {item.description}
                  </div>
                <p className="boxDate text-center my-3">Added By: {item.author}</p>
                <div className="p-col-12 mt-3">
                  <div className="form-check">
                    <input className="form-check-input"
                    type="checkbox"
                    name="boxSuscribe"
                    checked={this.state.boxSuscribe}
                    onChange={this.handleChange} />
                    <label className="form-check-label">
                      Suscribe to this event
                    </label>
                  </div>
                </div>
                <div>{ editButton }</div>
              </div>
            )}
          </div>

        </div>
    )
  }
}
