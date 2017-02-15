import React, {Component} from 'react';
import './app.css';
import Nav from './components/Nav'
import Footer from './components/Footer'
import * as Actions from './actions/Actions'
import firebase from 'firebase'
import {browserHistory} from 'react-router'

export default class App extends Component {
    render() {

        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                browserHistory.push('/')
                Actions.setLoggedInStatus(true)
            } else {
                Actions.setLoggedInStatus(false)
            }
        });

        return (
            <div>
                <Nav/> {this.props.children}
                <Footer/>
            </div>
        );
    }
}
