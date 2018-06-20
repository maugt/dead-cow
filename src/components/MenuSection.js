import React, { Component } from 'react'

export default class MenuSection extends Component {

  render () {
    let list = []
    for (const i in this.props.data) {
      const item = this.props.data[i]
      if (item.Category === this.props.category) {
        list.push(
          <li key={i}>
            <span className='name'>{item.Name}</span>
            <div className='info'>
              {item.Source &&
               <span className='source'>{item.Source}</span>}
              {item.abv &&
               <span className='abv'>{item.abv}% ABV</span>}
              {item.ibu &&
               <span className='ibu'>{item.ibu} IBUs</span>}
            </div>
            {item.Description}
          </li>
        )
      }
    }

    return (
      <div>
        <p className='note'>
          {this.props.note}
        </p>
        <ul>
          {list}
        </ul>
      </div>)
  }

}
