/*helpers is used for global functions*/
/*show or hide some parts of components*/
import React, { Component } from 'react';
import axios from 'axios';
import { Route, Redirect } from 'react-router';

/*API REQUESTS*/
/*Register -POST*/
export function appRegister(myJSON){
  //console.log(myJSON);
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
        //localStorage.setItem('redirection', JSON.stringify("true"));
        console.log(response.data.access_token);
        localStorage.setItem('token-storage', JSON.stringify(response.data.access_token));
        localStorage.setItem('email-storage', JSON.stringify(myJSON.email));
        alert("You have successfully loged in!");
        window.location = '/';
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
export function appLogout(){
  let config = {
    headers: {'Authorization': "bearer " + JSON.parse(localStorage.getItem("token-storage"))}
  };
  let bodyParameters = {
   key: "value"
  }
  axios.post("/api/logout", bodyParameters, config)
  .then(function (response) {
    console.log(response);
    localStorage.removeItem("token-storage");
    localStorage.removeItem("email-storage");
    console.log("token-storage: "+JSON.parse(localStorage.getItem("token-storage")));
    console.log("email-storage: "+JSON.parse(localStorage.getItem("email-storage")));
    window.location = '/';
  })
  .catch(function (error) {
    console.log(error);
  })

}

/*Add Event-POST */
export function appAddEvent(myJSON){
  let config = {
    headers: {'Authorization': "bearer " + JSON.parse(localStorage.getItem("token-storage"))}
  };
  let bodyParameters = {
   key: "value"
  }
  console.log(myJSON);
  axios.post("/api/event", config, myJSON)
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
  axios.get("/api/pastEvent", myJSON)
  .then(function (response) {
    console.log(response);
    })
  .catch(function (error) {
    console.log(error);
  })
}
//\API REQUESTS
