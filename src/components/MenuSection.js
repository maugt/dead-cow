import React, { Component } from 'react'

export default class MenuSection extends Component {

  render() {
    let list = []
    for (const i in this.props.data) {
      const item = this.props.data[i]
      if (item.Category === this.props.category) {
        list.push(
          <div className='menu-item' key={i}>
            <p className='name'>{item.Name}</p>
            <p className='info'>
              {item.Source &&
                <span className='source'>{item.Source}</span>}
              {item.abv &&
                <span className='abv'>{item.abv}% ABV</span>}
              {item.ibu &&
                <span className='ibu'>{item.ibu} IBUs</span>}
            </p>
            <p>{item.Description}</p>
          </div>
        )
      }
    }

    return (
      <div className='menu-section'>
        <p className='note'>
          {this.props.note}
        </p>
        <div className='menu-items'>
          {list}
        </div>
      </div>)
  }

}
