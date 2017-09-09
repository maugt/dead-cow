import React, { Component } from 'react'
import Markdown from 'react-markdown'

export default class MiniAbout extends Component {

  render () {
    const s = require(`../text/about-${this.props.slug}-short.md`)

    return (
      <div className='mini-about'>
        <h2>About the {this.props.slug}</h2>
        <Markdown source={s} />
        <a href={`about#about-${this.props.slug}`}>more...</a>
      </div>
    )
  }
}
