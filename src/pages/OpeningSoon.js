import React, {Component} from 'react'
import * as Actions from '../actions/Actions'

export default class OpeningSoon extends Component {

    toggleNav() {
        Actions.toggleNav();
    }

    render() {

        return (
            <h4>opening soon...</h4>
        )
    }
}
