import React, { Component } from 'react';
import './App.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
// import TwitterBar from './components/TwitterBar'
import * as Actions from './actions/Actions'
import firebase from 'firebase'

export default class App extends Component {

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                Actions.setLoggedInStatus(true)
            } else {
                Actions.setLoggedInStatus(false)
            }
        }).bind(this)
    }

    render() {
        return (
            <div>
                <Nav /> {this.props.children}

                <Footer />
            </div>
        );
    }
}
