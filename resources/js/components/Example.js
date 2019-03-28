import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <div className="card">
                            <div className="card-header">Event Dab</div>
                            <Link to={'/create-event'}  type="button" className="btn btn-primary">Add event</Link>
                            <div className="card-body">
                                I'm an example component!
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
