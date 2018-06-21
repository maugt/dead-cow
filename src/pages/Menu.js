import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import { buildUrl } from '../lib/apiTools.js'
import Markdown from 'react-markdown'
import MenuSection from '../components/MenuSection'

export default class FullMenu extends Component {

  constructor() {
    super()
    this.state = {
      menu: {},
      notes: {}
    }
  }

  componentWillMount() {
    fetch(buildUrl('collections/get/Menu'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          menu: json.entries
        })
      })

    fetch(buildUrl('regions/data/MenuNotes'))
      .then(res => res.json())
      .then(json => {
        this.setState({
          notes: json
        })
      })
  }

  componentWillUnmount() { }

  render() {
    // console.log(this.state.menu)
    document.title = 'Bistro One Twelve - Menu'
    return (
      <div className='menu'>
        <PageHeader img='colored-veggies' title='Menu' />
        <div className='page-content'>
          <div className='container'>
            <h2>Bistro Cuisine</h2>
            <Markdown source={this.state.notes.cuisine} />
            <h2>Morning</h2>
            <p>
              {this.state.notes.morning}
            </p>
            <h3>Breakfast</h3>
            <MenuSection note={this.state.notes.breakfast} category='breakfast' data={this.state.menu} />
            <h3>Coffee</h3>
            <MenuSection note={this.state.notes.coffee} category='coffee' data={this.state.menu} />
            <h2>Lunch & Dinner</h2>
            <p>
              {this.state.notes.Main}
            </p>
            <h3>Specialties Of The Moment</h3>
            <MenuSection note={this.state.notes.specials} category='specials' data={this.state.menu} />
            <h3>Flatbreads</h3>
            <MenuSection note={this.state.notes.flatbreads} category='flatbreads' data={this.state.menu} />
            <h3>French-Style Baguettes</h3>
            <MenuSection note={this.state.notes.baguettes} category='baguettes' data={this.state.menu} />
            <h3>Salads</h3>
            <MenuSection note={this.state.notes.salads} category='salads' data={this.state.menu} />
            <h3>Nibbles</h3>
            <MenuSection note={this.state.notes.nibbles} category='nibbles' data={this.state.menu} />
            <h3>Dessert</h3>
            <MenuSection note={this.state.notes.dessert} category='dessert' data={this.state.menu} />
            <h3>Beer</h3>
            <MenuSection note={this.state.notes.beer} category='beer' data={this.state.menu} />
            <h3>Wine</h3>
            <MenuSection note={this.state.notes.wine} category='wine' data={this.state.menu} />
          </div>
        </div>
      </div >
    )
  }

}
