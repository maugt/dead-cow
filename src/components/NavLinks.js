import React, { Component } from 'react'

export default class NavLinks extends Component {

  render () {
    return (
      <div className='navigation'>
        <ul>
          <li>
            <a href='/menu'>Menu</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </div>
    )
  }
}
