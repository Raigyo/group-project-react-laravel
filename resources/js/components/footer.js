import React, { Component } from 'react'
import Nav from 'react-bootstrap/Nav'

export default class FooterContent extends Component {

    render() {

        return (
            <Nav className="footer bg-light navbar fixed-bottom d-flex-row jusify-content-around">
                <p className="navbar-header text-center font-italic w-100">© 2019 The Dab Fundation - Julien -  Michael - Thibault - Vincent</p>
            </Nav>
        );
    }
}