import React, {Component} from 'react'
import firebase from 'firebase'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import * as Actions from '../actions/Actions'
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

    }).then((result) => {
      // console.log(result)
      if (result) {
        Actions.setLoggedInStatus(true)
        browserHistory.push('/')
      }
    });
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
        <div className="background-image">
          <div className="wrapper">

            <div className="container">
              <MobileToggleSwitch/>
              <div className="page-front-matter">
                <h1>Login</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Email" value={this.state.value} onChange={this.handleEmailChange}/>
            <input type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange}/>
            <input className="submit" type="submit" value="Submit"/>
          </form>
        </div>
      </div>
    )
  }
}
