import React, { Component } from 'react'
import SocialLinks from './SocialLinks'
import ContactInfo from './ContactInfo'
import { buildUrl } from '../lib/apiTools'

export default class Footer extends Component {
  constructor() {
    super()
    this.state = {
      hours: []
    }
  }

  componentWillMount () {
    fetch(buildUrl('hours'))
      .then(res => res.json())
      .then(json => this.setState({
        hours: json
      }))
  }

  render () {
    console.log(this.state)
    return (
      <footer>
        <div className='container'>
          <div className='footer'>
            <img className='footer-logo' src='/assets/icon-dark.png' alt='Bistro One Twelve at The Tannery Logo' />
            <div className='footer-hours'>
              <h3>Hours</h3>
              <ul>
                {this.state.hours.map((x, i) => {
                  return <li key={i}>
                    <span>{x.day}</span>{x.hours}
                  </li>
                })}
              </ul>
            </div>
            <div className='footer-social'>
              <h3>Social</h3>
              <SocialLinks text={true} />
            </div>
            <div className='footer-contact'>
              <h3>Contact Us</h3>
              <ContactInfo />
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
