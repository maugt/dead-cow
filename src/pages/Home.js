import React, { Component } from 'react'
import Cover from '../components/Cover'
import Banner from '../components/Banner'
import GoogleMap from '../components/GoogleMap'
import { buildUrl } from '../lib/apiTools'
import renderHTML from 'react-render-html'

export default class Home extends Component {

  constructor() {
    super()
    this.state = {
      about: [],
      hours: []
    }
  }

  componentWillMount () {
    fetch(buildUrl('text'))
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

    let textObj = {}

    this.state.about.forEach(x => {
      textObj[x.section] = x.text
    })
    console.log(textObj)

    return (
      <div className='home' >
        <Cover children={this.props.children} />
        {textObj.banner &&
          textObj.banner.length > 0 &&
          <Banner text={textObj.banner} />
        }
        <div className='page-content'>
          <div className='container'>
            <div className='about-snippets'>
              <div className='mini-about'>
                <h2>About the Concept</h2>
                {renderHTML(textObj['concept-short'] || "")}
                <a href='about#about-concept'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Name</h2>
                {renderHTML(textObj['name-short'] || "")}
                <a href='about#about-name'>more...</a>
              </div>
              <div className='mini-about'>
                <h2>About the Chef</h2>
                {renderHTML(textObj['chef-short'] || "")}
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
