import React, { Component } from 'react'
import { buildUrl } from '../lib/apiTools'
import renderHTML from 'react-render-html'

export default class Chalkboard extends Component {

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
      <div className='chalkboard'>
        {renderHTML(textObj['chalkboard'] || "")}
      </div>
    )
  }
}
