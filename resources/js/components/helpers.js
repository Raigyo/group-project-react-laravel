/*helpers is used for global functions*/
/*show or hide some parts of components*/

/*Get all future events*/
export function getApiFutureEvents(){
    // Github fetch library : https://github.com/github/fetch
    // Call the API page
    axios.get("https://character-database.becode.xyz/characters/")
    .then ((result) => {
      this.setState({
        eventsFuture: result
      });
    })
}
