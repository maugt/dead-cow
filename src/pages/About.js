import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import { buildUrl } from '../lib/apiTools'
import renderHTML from 'react-render-html'

export default class About extends Component {

  constructor() {
    super()
    this.state = {
      about: []
    }
  }

  componentWillMount () {
    fetch(buildUrl('about'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          about: json
        })
      })
  }

  render () {

    let aboutObj = {}

    this.state.about.forEach(x => {
      aboutObj[x.section] = x.text
    })

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
                {renderHTML(aboutObj['name'] || "")}
              </div>
              <div className='section'>
                <h2><span id='about-concept' ></span>Bistro Cuisine</h2>
                <img alt='' src='/assets/salad.jpg' />
                {renderHTML(aboutObj['concept'] || "")}
              </div>
              <div className='section'>
                <h2><span id='about-chef' ></span>The Chef</h2>
                {renderHTML(aboutObj['chef'] || "")}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
