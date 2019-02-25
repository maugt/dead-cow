import React, { Component } from 'react'
import renderHTML from 'react-render-html'

export default class Chalkboard extends Component {
  render () {


    return (
      <div className='banner'>
        <div className="container">
          {renderHTML(this.props.text)}
        </div>
      </div >
    )
  }
}
