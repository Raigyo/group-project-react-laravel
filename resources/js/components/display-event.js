import React, { Component } from 'react';
import { appGetEventByID } from './helpers';
import { suscribeEvent } from './helpers';
import { unsuscribeEvent } from './helpers';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

export default class DisplayEvent extends Component {

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      name: "",
      eventList: [],
      suscribersList: [],
      boxSubscribe : false,
      idEvent: this.props.match.params.id,

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
    const idRoute = this.state.idEvent;

    let editButton;
    let suscribeButton;
      if (sessionStorage.getItem("user-name-storage") === JSON.stringify(authorArticle[0])) {
        editButton = (
          <Link variant="light" className="btn btn-light my-2" to={"/edit/"+idRoute} >Edit this event</Link>
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
      <div className="m-2 m-sm-5 p-2 p-xl-5">

          <div>
            {this.state.eventList.map(item =>
              <div key={item.id} className="w-100  ">


                  <h1 className="text-center border-bottom">{item.name}</h1>
                  <h4 className="boxDate text-center shadow">{item.date_event}</h4>
                  <div className="imgDivSingle mt-5">
                <img className="imgDisplaySingle ml-auto mr-auto" src={item.image_url} alt="image event"/>
                </div>
                  <div className="mt-5 text-center boxDescriptionSingle shadow">
                    {item.description}
                  </div>
                <p className="boxDate shadow text-center my-3">Added By: {item.author}</p>
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
