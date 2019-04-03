/*helpers is used for global functions*/
/*show or hide some parts of components*/
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router'


/*API REQUESTS*/
/*Register -POST*/
export function appRegister(myJSON){
  //console.log(myJSON);
  axios.post("/api/register", myJSON)
  .then(function (response) {
      console.log("registered!!");
      alert("You have successfully registered! Please login!");
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
        //localStorage.setItem('redirection', JSON.stringify("true"));
        console.log(response.data.access_token);
        localStorage.setItem('token-storage', JSON.stringify(response.data.access_token));
        localStorage.setItem('email-storage', JSON.stringify(myJSON.email));
        alert("You have successfully loged in!");
        <Redirect to="/" />
        //console.log("helper component: "+JSON.parse(localStorage.getItem("redirection")));
    })
    .catch(function (error) {
        //localStorage.setItem('redirection', JSON.stringify("false"));
        //console.log("Problem with email or password");
        alert("Problem, check your email and/or password!");
        //console.log("helper component: "+JSON.parse(localStorage.getItem("redirection")));
    });
}

/*Logout-POST */
export function appLogout(myJSON){
  axios.post("/api/logout", myJSON);
}

/*Add Event-POST */
export function appAddEvent(myJSON){
  axios.post("/api/event", myJSON);
}

/*Update Event-PUT */
export function appUpdateEvent(myJSON){
  axios.put("/api/event/1", myJSON);
}

/*Get Event by ID-GET */
export function appGetEventByID(myJSON){
  axios.get("/api/event/1", myJSON);
}

/*Get Event -GET */
/*Get all future events*/
export function appGetEvent(eventList){
    axios.get("/api/events")
      .then (response => eventList.setState({
        eventList : response.data
      }))
}

/*Get Past Event -GET */
export function appGetPastEvent(myJSON){
  axios.get("/api/pastEvent", myJSON);
}
//\API REQUESTS
