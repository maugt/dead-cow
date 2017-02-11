import React, {Component} from 'react'
import firebase from 'firebase'
import {browserHistory} from 'react-router'

export default class Logout extends Component {

    render() {
        firebase.auth().signOut().then(function() {
            browserHistory.push('/')
        }, function(error) {
            // An error happened.
        });
        return (
            <h1>byeeee</h1>
        )
    }
}
