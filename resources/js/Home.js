import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Routes from './Routes';
import DisplayAll from './components/display-all';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Event Dab</div>
                            <Router>
                              <Link to={'/create-event'}  type="button" className="btn btn-primary">Add event</Link>
                            </Router>
                            <div className="card-body">
                                Event Dab - Event manager
                            </div>
                            <div>
                            <DisplayAll/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

if (document.getElementById('example')) {
    ReactDOM.render(<Home />, document.getElementById('example'));
}
