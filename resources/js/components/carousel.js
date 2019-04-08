import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselContent extends Component {

    render() {

        return (
            <div>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="http://sf.co.ua/13/06/wallpaper-2845536.jpg"
                            alt="First slide"
                        />
                        <Carousel.Caption>
                            <h3>Find the best events around you</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.wallpaperup.com/uploads/wallpapers/2014/02/17/257421/1bd4ca017c64a926c910dbc1a2e17f8a.jpg"
                            alt="Second slide"
                        />

                        <Carousel.Caption>
                            <h3>Add your event here</h3>

                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className="d-block w-100"
                            src="https://www.wallpaperup.com/uploads/wallpapers/2018/01/11/1188211/3f083c5645a579118f9e4036955740b4-375.jpg"
                            alt="Third slide"
                        />

                        <Carousel.Caption>
                            <h3>Find where to go out</h3>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        );
    }
}
