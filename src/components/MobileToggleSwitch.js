import React, {Component} from 'react'
import * as Actions from '../actions/Actions'
import VarStore from '../stores/VarStore'

export default class MenuItem extends Component {

    constructor() {
        super();
        this.state = {
            navIsOpen: false
        }
    }

    toggleNav() {
        Actions.toggleNav();
    }

    componentWillMount() {
        VarStore.on("change", this.updateNav.bind(this))
    }

    updateNav() {
        this.setState({navIsOpen: VarStore.navIsOpen})
    }

    getStyles() {
        if (!this.state.navIsOpen) {
            return " collapsed"
        } else {
            return ""
        }
    }

    render() {

        return (
            <div className="mobile toggleSwitch">
                <a className={this.getStyles()} href="#" onClick={this.toggleNav.bind(this)}>+</a>
            </div>
        )
    }
}
