import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Routes from './Routes';
import NavbarContent from './components/navbar';
  
export default class Index extends Component {
    render() {
        return (
            <Router>
            <div>
            <NavbarContent />
            <div>
                <Routes />
            </div>
        </div>
        </Router>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Index />, document.getElementById('example'));
}
