import React, { Component } from 'react'


export default class MenuSection extends Component {

  render () {
    let list = []
    let data = this.props.data
      .filter(x => x.section === this.props.section)
      .filter(x => x.name !== 'note')

    let note = this.props.data
    .filter(x => x.section === this.props.section)
    .filter(x => x.name === 'note')
    .map(x => x.description)[0] || ""

    console.log(this.props.section, note)
      for (const i in data) {
      const item = data[i]
      list.push(
        <div className='menu-item' key={i}>
          <h4 className='name'>{item.name}</h4>
          <p className='info'>
            {item.source &&
              <span className='source'>{item.source}</span>}
          </p>
          <p className='info'>
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
          {note}
        </p>
        <div className='menu-items'>
          {list}
        </div>
      </div>)
  }

}
