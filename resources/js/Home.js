import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselContent from './components/carousel'
import Button from 'react-bootstrap/Button'
import { getApiFutureEvents } from './components/helpers'
import posed from 'react-pose'

const Box = posed.div({
    hoverable: true,
    pressable: true,
    init: {
      scale: 1,
      boxShadow: '0px 0px 0px rgba(0,0,0,0)'
    },
    hover: {
      scale: 1.1,
      boxShadow: '0px 0px 10px rgba(0,0,0,0.2)',
      
    },
    press: {
    
      boxShadow: '0px 0px 2px rgba(0,0,0,0.5)'
    }
  });

  

export default class Home extends Component {
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
                        <Box key={character.id} className="color3 col-xs-12 col-md-6 col-xl-4 text-center d-flex flex-column p-sm-1 p-lg-2 p-0 box mt-3">
                            <div className="w-100">
                                <h1>{character.name}</h1>
                                <p>
                                    {character.shortDescription}
                                </p>
                                <p>
                                    <Button variant="primary">Learn more</Button>
                                </p>
                            </div>
                        </Box>
                    )}
                </div>
            </div>
        )
    }
}

