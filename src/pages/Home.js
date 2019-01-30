import React, { Component } from 'react'
import Cover from '../components/Cover'
import GoogleMap from '../components/GoogleMap'
import { buildUrl } from '../lib/apiTools'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      about: {}
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

    fetch(buildUrl('hours'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          hours: json
        })
      })
  }


  render () {
    return (
      <div className='home' >
        <Cover children={this.props.children} />
        <div className='page-content'>
          <div className='container'>
            <div className='about-snippets'>
              <div className='mini-about'>
                <h2>About the Concept</h2>
                <p>
                  {this.state.about.conceptShort}
                </p>
                <a href='about#about-concept'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Name</h2>
                <p>
                  {this.state.about.nameShort}
                </p>
                <a href='about#about-name'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Chef</h2>
                <p>
                  {this.state.about.chefShort}
                </p>
                <a href='about#about-chef'>more...</a>
              </div>
            </div>
          </div>
        </div>
        <GoogleMap />
      </div>
    )
  }
}
