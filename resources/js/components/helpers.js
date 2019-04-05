/*helpers is used for global functions*/
/*show or hide some parts of components*/
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';
import date from 'date-and-time';

/* fct to conver date from ISO to YYYY/MM/DD HH:mm:ss and then replace '/' by '-'*/
export function convertDate(arg){
  let now = new Date(arg);
  let convertDate = date.format(now, 'YYYY/MM/DD HH:mm:ss');
  let regex = /\//ig;
  let convertedDateStrike = convertDate.replace(regex, '-');
  return convertedDateStrike;
}

/*API REQUESTS*/
/*Register -POST*/
export function appRegister(myJSON){
  axios.post("/api/register", myJSON)
  .then(function (response) {
      console.log("registered!!");
      alert("You have successfully registered! Please login!");
      window.location = '/login';
  })
  .catch(function (error) {
      console.log("Email already used");
      alert("Email already used, choose another one");
  });
}

/*Login -POST - user/pw */
export function appLogin(myJSON){
  axios.post("api/login", myJSON)
    .then(function (response) {
        sessionStorage.setItem('token-storage', JSON.stringify(response.data.access_token));
        sessionStorage.setItem('email-storage', JSON.stringify(myJSON.email));
        alert("You have successfully loged in!");
        window.location = '/';
    })
    .catch(function (error) {
        alert("Problem, check your email and/or password!");
    });
}

/*Logout-POST */
export function appLogout(){
  let config = {
    headers: {'Authorization': "bearer " + JSON.parse(sessionStorage.getItem("token-storage"))}
  };
  let bodyParameters = {
   key: "value"
  }
  axios.post("/api/logout", bodyParameters, config)
  .then(function (response) {
    console.log(response);
    sessionStorage.removeItem("token-storage");
    sessionStorage.removeItem("email-storage");
    console.log("token-storage: "+JSON.parse(sessionStorage.getItem("token-storage")));
    console.log("email-storage: "+JSON.parse(sessionStorage.getItem("email-storage")));
    window.location = '/';
  })
  .catch(function (error) {
    console.log(error);
  })

}

/*Add Event-POST */
export function appAddEvent(myJSON){
  axios(
    {
      method: 'POST',
      url: "/api/event",
      headers:
        {
          'Content-Type' : "application/json",
          'Authorization': "Bearer " + JSON.parse(sessionStorage.getItem("token-storage"))
        },
      data: JSON.stringify(myJSON)
  })
  .then(function (response) {
    alert("Event successfully added!");
    window.location = '/';
    })
  .catch(function (error) {
    console.log(error);
  })
}

/*Get Event -GET */
/*Get all future events*/
export function appGetEvent(eventList){
    axios.get("/api/events")
      .then (response => eventList.setState({
        eventList : response.data
      }))
      .catch(function (error) {
        console.log(error);
      })
  }

/*Get Past Event -GET */
export function appGetPastEvent(eventList){
  axios.get("/api/pastEvent")
    .then (response => eventList.setState({
      eventList : response.data
    }))
    .catch(function (error) {
      console.log(error);
    })
}

/*Get Event by ID-GET */
export function appGetEventByID(myJSON){
  //console.log("myjson:"+myJSON);
  axios.get("/api/event/"+ myJSON)
  .then(function (response) {
    console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  })
}

/*Update Event-PUT */
export function appUpdateEvent(myJSON){
  axios.put("/api/event/1", myJSON)
  .then(function (response) {
    console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  })
}
//\API REQUESTS
