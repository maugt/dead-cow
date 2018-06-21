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
            <Markdown source={this.state.notes.Cuisine} />
            <h2>Morning</h2>
            <p>
              {this.state.notes.Morning}
            </p>
            <h3>Breakfast</h3>
            <MenuSection note={this.state.notes.Breakfast} category='breakfast' data={this.state.menu} />
            <h3>Coffee</h3>
            <MenuSection note={this.state.notes.Coffee} category='coffee' data={this.state.menu} />
            <h2>Lunch & Dinner</h2>
            <p>
              {this.state.notes.Main}
            </p>
            <h3>Specialties Of The Moment</h3>
            <MenuSection note={this.state.notes.Specials} category='specials' data={this.state.menu} />
            <h3>Flatbreads</h3>
            <MenuSection note={this.state.notes.Flatbreads} category='flatbreads' data={this.state.menu} />
            <h3>French-Style Baguettes</h3>
            <MenuSection note={this.state.notes.Baguettes} category='baguettes' data={this.state.menu} />
            <h3>Salads</h3>
            <MenuSection note={this.state.notes.Salads} category='salads' data={this.state.menu} />
            <h3>Nibbles</h3>
            <MenuSection note={this.state.notes.Nibbles} category='nibbles' data={this.state.menu} />
            <h3>Dessert</h3>
            <MenuSection note={this.state.notes.Dessert} category='dessert' data={this.state.menu} />
            <h3>Beer</h3>
            <MenuSection note={this.state.notes.Beer} category='beer' data={this.state.menu} />
            <h3>Wine</h3>
            <MenuSection note={this.state.notes.Wine} category='wine' data={this.state.menu} />
          </div>
        </div>
      </div >
    )
  }

}
