import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


export default class Home extends Component {
    render() {
        return (
            <div>
            <h1>ok</h1>
          
                <div>
                    <Link to={"/display-all"}>Click here</Link>
                </div>
          
            </div>
        );
    }
}

