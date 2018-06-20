import React, { Component } from 'react'
import Cover from '../components/Cover'
import GoogleMap from '../components/GoogleMap'
import { buildUrl } from '../lib/apiTools'

export default class Home extends Component {

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
    return (
      <div className='home'>
        <Cover children={this.props.children} />
        <div className='page-content'>
          <div className='container'>
            <div className='about-snippets'>
              <div className='mini-about'>
                <h2>About the Concept</h2>
                <p>
                  {this.state.text.AboutConceptShort}
                </p>
                <a href='about#about-concept'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Name</h2>
                <p>
                  {this.state.text.AboutNameShort}
                </p>
                <a href='about#about-name'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Chef</h2>
                <p>
                  {this.state.text.AboutChefShort}
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
