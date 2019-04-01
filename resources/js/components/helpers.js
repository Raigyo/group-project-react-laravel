/*helpers is used for global functions*/
/*show or hide some parts of components*/

import axios from 'axios';


/*API REQUESTS*/
/*Register -POST*/
export function appRegister(myJSON){
  axios.post("/api/register", myJSON);
}

/*Login -POST - user/pw */
export function appLogin(myJSON){
  console.log(myJSON);
  axios.post("/api/login", myJSON);
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
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    axios.get("/api/events")
      //.then(response => response.json())
      .then (response => eventList.setState({
        eventList : response.data
      }))
}

/*Get Past Event -GET */
export function appGetPastEvent(myJSON){
  axios.get("/api/pastEvent", myJSON);
}
//\API REQUESTS

/*TO DELETE LATER - TEMPORARY*/
/*Get all future events*/
export function getApiFutureEvents(characters){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    axios.get("https://character-database.becode.xyz/characters")
      //.then(response => response.json())
      .then (response => characters.setState({
        characters : response.data
      }))
}
