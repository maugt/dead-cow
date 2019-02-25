import React, { Component } from 'react'
import * as Actions from '../actions/Actions'
import VarStore from '../stores/VarStore'

export default class MenuItem extends Component {

  constructor() {
    super()
    this.state = {
      navIsOpen: false
    }
  }

  toggleNav () {
    Actions.toggleNav()
  }

  componentWillMount () {
    VarStore.on('change', this.updateNav.bind(this))
  }

  updateNav () {
    this.setState({ navIsOpen: VarStore.navIsOpen })
  }

  getStyles () {
    if (!this.state.navIsOpen) {
      return ' collapsed'
    } else {
      return ''
    }
  }

  render () {
    return (
      <div className='mobile toggleSwitch'>
        <a onClick={this.toggleNav.bind(this)}><img src='/assets/icon-highlight.png' alt='bistro 112-icon' /></a>
      </div>
    )
  }
}
