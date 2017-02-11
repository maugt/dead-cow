import React, {Component} from 'react'
import firebase from 'firebase'
import {browserHistory} from 'react-router'

export default class OpeningSoon extends Component {

    constructor() {
        super()
        this.state = {
            email: '',
            password: ''
        }
        this.handleEmailChange = this.handleEmailChange.bind(this)
        this.handlePasswordChange = this.handlePasswordChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault()
        let {email, password} = this.state
        firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.error(errorCode, errorMessage)
        });
        browserHistory.push('/')
    }

    handleEmailChange(event) {
        this.setState({email: event.target.value})
    }

    handlePasswordChange(event) {
        this.setState({password: event.target.value})
    }

    render() {
        return (
            <div className="login">
                <div className="container">
                    <div className="page-front-matter">
                        <h1>Login</h1>
                    </div>
                </div>
                <div className="container">
                    <form onSubmit={this.handleSubmit}>
                        <label>
                            Name:
                            <input type="text" value={this.state.value} onChange={this.handleEmailChange}/>
                        </label>
                        <label>
                            Password:
                            <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
                        </label>
                        <input type="submit" value="Submit"/>
                    </form>
                </div>
            </div>
        )
    }
}
