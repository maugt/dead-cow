import React, { Component } from 'react'
import './app.css'
import Nav from './components/Nav'
import Footer from './components/Footer'

export default class App extends Component {

  componentWillMount () {}

  render () {
    return (
      <div>
        <Nav />
        <div className='space'>
        </div>
        {this.props.children}
        <Footer />
      </div>
    )
  }
}
