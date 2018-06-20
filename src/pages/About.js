import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import { buildUrl } from '../lib/apiTools'
import Markdown from 'react-markdown'

export default class About extends Component {

  constructor () {
    super()
    this.state = {
      text: {}
    }
  }

  componentWillMount () {
    fetch(buildUrl('regions/data/About'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          text: json
        })
      })
  }

  render () {
    document.title = 'Bistro One Twelve - About'
    return (
      <div className='about'>
        <PageHeader img='salad' title='About' subtitle='Decidedly Local &amp; Aggressively Seasonal' />
        <div className='full-about'>
          <div className='container'>
            <div className='page-content'>
              <div className='section'>
                <h2><span id='about-name' ></span>The Name</h2>
                <img alt='' src='/assets/salz-tannery.png' />
                <Markdown source={this.state.text.AboutName} />
              </div>
              <div className='section'>
                <h2><span id='about-concept' ></span>Bistro Cuisine</h2>
                <img alt='' src='/assets/salad.jpg' />
                <Markdown source={this.state.text.AboutConcept} />
              </div>
              <div className='section'>
                <h2><span id='about-chef' ></span>The Chef</h2>
                <Markdown source={this.state.text.AboutChef} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
