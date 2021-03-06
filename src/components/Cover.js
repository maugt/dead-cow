import React, { Component } from 'react'
import { buildUrl } from '../lib/apiTools'
import Chalkboard from './Chalkboard'

export default class Cover extends Component {

  constructor() {
    super();
    this.state = {
      text: []
    }
  }

  componentWillMount () {
    fetch(buildUrl('text'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          text: json
        })
      })
  }

  render () {

    let textObj = {}

    this.state.text.forEach(x => {
      textObj[x.section] = x.text
    })

    return (
      <div className='cover'>
        <div className='background-image'>
          <div className='wrapper'>
            <div className='container'>
              <div className='front-matter'>
                <img className='logo' src='/assets/logo-light.png' alt='Bistro One Twelve at The Tannery logo' />
                <div className='cover-text'>
                  <h2 className='slogan'>Decidedly Local,<br />Aggressively Seasonal</h2>
                  <Chalkboard />
                </div>
              </div>
              <div className='info'>
                <a rel='noopener noreferrer' target='blank' href='https://www.google.com/maps/dir//1060+River+St+%23112,+Santa+Cruz,+CA+95060/@36.9867018,-122.0647113,13z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xdb9dc8e0e174b70b!2m2!1d-122.029606!2d36.986707'>1060 River Street, Santa Cruz, CA 95060</a>
                <a href='tel:+18318547458'>831.854.7458</a>
                <a href="#hours">Open Daily!</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
