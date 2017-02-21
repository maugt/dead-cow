import React, {Component} from 'react'
import Twitter from 'twitter'
import T from '../constants/credentials/TwitterConfig.json'

export default class TwitterBar extends Component {

    constructor() {
        super();
        this.state = {
            tweet: "@theArtBarSc We're gonna eat you so muchhhhhh"
        }
    }

    render() {
        return (
            <div className="twitter-bar">
                <div className="container">
                    <p>{this.state.tweet}</p>
                </div>
            </div>
        )
    }
}
