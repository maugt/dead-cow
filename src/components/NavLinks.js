import React, { Component } from 'react'

export default class NavLinks extends Component {

  render () {
    return (
      <div className='navigation'>
        <ul>
          <li>
            <a href='/menus'>Menus</a>
          </li>
          <li>
            <a href='/about'>About</a>
          </li>
        </ul>
      </div>
    )
  }
}
