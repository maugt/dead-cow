import React, { Component } from 'react'

import Facebook from '../svg/facebook.svg'
import Twitter from '../svg/twitter.svg'
import Instagram from '../svg/instagram.svg'
import Yelp from '../svg/yelp.svg'

export default class SocialLinks extends Component {

  render () {
    if (this.props.text) {
      return (
        <div className='social'>
          <ul>
            <li>
              <a href='https://www.facebook.com/bistro112sc' rel='noopener noreferrer' target='blank'>Facebook</a>
            </li>
            <li>
              <a href='https://twitter.com/bistro112sc' rel='noopener noreferrer' target='blank'>Twitter</a>
            </li>
            <li>
              <a href='https://www.instagram.com/bistro112sc' rel='noopener noreferrer' target='blank'>Instagram</a>
            </li>
            <li>
              <a href='https://www.yelp.com/biz/bistro-one-twelve-at-the-tannery-santa-cruz'>Yelp</a>
            </li>
          </ul>
        </div>
      )
    }

    return (
      <div className='social'>
        <a
          className='social-link'
          href='https://www.facebook.com/bistro112sc'
          rel='noopener noreferrer'
          target='blank'>
          <Facebook className='social-icon' />
        </a>
        <a
          className='social-link'
          href='https://twitter.com/bistro112sc'
          rel='noopener noreferrer'
          target='blank'>
          <Twitter className='social-icon' />
        </a>
        <a
          className='social-link'
          href='https://www.instagram.com/bistro112sc'
          rel='noopener noreferrer'
          target='blank'>
          <Instagram className='social-icon' />
        </a>
        <a className='social-link' href='https://www.yelp.com/biz/bistro-one-twelve-at-the-tannery-santa-cruz'>
          <Yelp className='social-icon' />
        </a>
      </div>
    )
  }
}
