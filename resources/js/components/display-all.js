import React, { Component } from 'react'
import { getApiFutureEvents } from './helpers'
import CarouselContent from './carousel'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'

export default class DisplayAll extends Component {

  constructor(props) {
    super(props);
    this.state = {
      characters: [],
    };//\state
  }//\constructor

  /*componentDidUpdate() {
    getApiFutureEvents();
  }*/

  componentDidMount() {
    getApiFutureEvents(this);
  }

  /*rendering content*/
  render() {
    const { characters } = this.state;
    console.log("characters: " + characters);
    return (
      <div>
        <div>
          <CarouselContent />
        </div>
        <h1 className="mt-2">Last Events : </h1>
        <div className="d-flex flex-wrap">
          {characters.map(character =>
            <div key={character.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column p-sm-1 p-lg-2 p-0">
              <div className="border w-100">
                <h1>{character.name}</h1>
                <p>
                  {character.shortDescription}
                </p>
                <p>
                  <Button variant="primary">Learn more</Button>
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    )
  }
}
