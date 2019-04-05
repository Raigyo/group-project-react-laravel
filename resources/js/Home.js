import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import CarouselContent from './components/carousel'
import Button from 'react-bootstrap/Button'
import { getApiFutureEvents } from './components/helpers'
import posed from 'react-pose'
import DisplayAll from './components/display-all';
import { Paginator } from 'primereact/paginator';
import PaginatorDemo from './components/paginators'





export default class Home extends Component {

    render() {

        return (
            <div>
                <div>
                    <CarouselContent />
                </div>

                <DisplayAll />
                <div>
                    <Paginator />
                </div>
            </div>

        )
    }
}

