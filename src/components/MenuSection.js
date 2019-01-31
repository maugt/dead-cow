import React, { Component } from 'react'


export default class MenuSection extends Component {

  render () {
    let list = []
    let data = this.props.data.filter(x => x.subcategory === this.props.category)
    console.log(this.props.category, data)
    for (const i in data) {
      const item = data[i]
      list.push(
        <div className='menu-item' key={i}>
          <h4 className='name'>{item.name}</h4>
          <p className='info'>
            {item.source &&
              <span className='source'>{item.source}</span>}
            {item.abv &&
              <span className='abv'>{item.abv}% ABV</span>}
            {item.ibu &&
              <span className='ibu'>{item.ibu} IBUs</span>}
          </p>
          <p>{item.description}</p>
        </div>
      )
    }

    return (
      <div className='menu-section' >
        <p className='note'>
          {this.props.note}
        </p>
        <div className='menu-items'>
          {list}
        </div>
      </div>)
  }

}
