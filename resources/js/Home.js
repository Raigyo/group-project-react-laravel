import React, { Component } from 'react';
import CarouselContent from './components/carousel';
import DisplayAll from './components/display-all';

export default class Home extends Component {
    render() {

        return (
            <div>
                <div>
                    <CarouselContent />
                </div>

                <DisplayAll />

            </div>

        )
    }
}
