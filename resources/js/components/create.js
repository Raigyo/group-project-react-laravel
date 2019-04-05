import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
/*import CalendarDemo from './calendar'*/
import { Calendar } from 'primereact/calendar';
import Button from 'react-bootstrap/Button'
import { appAddEvent } from './helpers';
// import date from 'date-and-time';

export default class Create extends Component {

  constructor(props) {
    super(props);
    let today = new Date();
    let month = today.getMonth();
    let year = today.getFullYear();
    let prevMonth = (month === 0) ? 11 : month - 1;
    let prevYear = (prevMonth === 11) ? year - 1 : year;
    let nextMonth = (month === 11) ? 0 : month + 1;
    let nextYear = (nextMonth === 0) ? year + 1 : year;

    let minDate = new Date();
    minDate.setMonth(prevMonth);
    minDate.setFullYear(prevYear);
    let maxDate = new Date();
    maxDate.setMonth(nextMonth);
    maxDate.setFullYear(nextYear);
    this.validateForm = this.validateForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dateTemplate = this.dateTemplate.bind(this);
    this.state = {
      name: "",
      description: "",
      date_event: null,
      reminder: null,
      minDate: minDate,
      maxDate: maxDate,
      invalidDates: [today]
    };
  }//\end constructor

  validateForm() {
    return this.state.name.length > 0 && this.state.description.length > 0 && this.state.description.length > 0;
  }//\end fct validateForm

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }//\end fct handleChange

  handleSubmit() {
    //let myJSON = JSON.stringify(this.state);
    let now = new Date(this.state.date_event);
    let convertedDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
    let regex = /\//ig;
    let convertedDateStrike = convertedDate.replace(regex, '-');
    let myJSON = { "name": this.state.name, "date_event": convertedDateStrike, "description": this.state.description, "reminder": convertedDateStrike }
    event.preventDefault()
    appAddEvent(myJSON);
  }//\end fct handleSubmit

  dateTemplate(date) {
    if (date.day > 10 && date.day < 15) {
      return (
        <div style={{ backgroundColor: '#1dcbb3', color: '#ffffff', fontWeight: 'bold', borderRadius: '50%', width: '2em', height: '2em', lineHeight: '2em', padding: 0 }}>{date.day}</div>
      );
    }
    else {
      return date.day;
    }
  }

  //   constructor(props) {
  //     super(props);
  //     this.validateForm = this.validateForm.bind(this);
  //     this.handleChange = this.handleChange.bind(this);
  //     this.handleSubmit = this.handleSubmit.bind(this);
  //     this.state = {
  //       name: "",
  //       date_event: "",
  //       description: "",
  //       reminder: "",
  //       //isLoggedIn: false,
  //       //user: {}
  //     };
  //   }//\end constructohpr


  render() {
    return (

      <Form onSubmit={this.handleSubmit} className="m-5">
        <h1>Create new Event</h1>
        <Form.Group controlId="exampleForm.ControlInput1">
          <Form.Label>Title</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="your event title"
            onChange={this.handleChange}
          />
        </Form.Group>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            as="textarea" rows="10"
            onChange={this.handleChange}
          />
        </Form.Group>
        <div className="p-col-12 mt-3">
          <p>Date of event:</p>
          <Calendar dateFormat="yy/mm/dd" value={this.state.date_event} onChange={(e) => this.setState({ date_event: e.value })} showTime={true} timeOnly={false} hourFormat="24" showIcon="true" showSeconds={true} />
        </div>
        <Form.Group controlId="formBasicChecbox">
          <Form.Check type="checkbox" label="Don't send a reminder" />
        </Form.Group>
        <Button className="my-3" type="submit">Submit</Button>
      </Form>
    )
  }
}
