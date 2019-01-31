import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import { buildUrl } from '../lib/apiTools.js'
import renderHTML from 'react-render-html'
import MenuSection from '../components/MenuSection'

export default class FullMenu extends Component {

  constructor() {
    super()
    this.state = {
      menu: [],
      text: []
    }
  }

  componentWillMount () {
    fetch(buildUrl('menu'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          menu: json
        })
      })
    fetch(buildUrl('text'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          text: json
        })
      })
  }

  componentWillUnmount () { }



  render () {
    let textObj = {}

    this.state.text.forEach(x => {
      textObj[x.section] = x.text
    })

    document.title = 'Bistro One Twelve - Menu'

    return (
      <div className='menu'>
        <PageHeader img='colored-veggies' title='Menu' />
        <div className='page-content'>
          <div className='container'>
            <h2>Bistro Cuisine</h2>
            {renderHTML(textObj['menu-notes'] || "")}
            <h3>Great Starts</h3>
            <MenuSection section='starts' data={this.state.menu} />
            <h3>All Day Refreshments</h3>
            <MenuSection section='drinks' data={this.state.menu} />
            <h2>Midday Fare</h2>
            <h3>Specialties Of The Moment</h3>
            <MenuSection section='specials' data={this.state.menu} />
            <h3>Flatbreads</h3>
            <MenuSection section='flatbreads' data={this.state.menu} />
            <h3>French-Style Baguettes</h3>
            <MenuSection section='baguettes' data={this.state.menu} />
            <h3>Salads</h3>
            <MenuSection section='salads' data={this.state.menu} />
            <h3>Nibbles</h3>
            <MenuSection section='nibbles' data={this.state.menu} />
            <h2>Wine &amp; Beer</h2>
            <h3>Beer</h3>
            <MenuSection section='beer' data={this.state.menu} />
            <h3>Wine</h3>
            <MenuSection section='wine' data={this.state.menu} />
          </div>
        </div>
      </div >
    )
  }

}
