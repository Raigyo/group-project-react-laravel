/*helpers is used for global functions*/
/*show or hide some parts of components*/

import axios from 'axios';

/*API REQUESTS*/
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
