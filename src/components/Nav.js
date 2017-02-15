import React, {Component} from 'react'

import VarStore from "../stores/VarStore"

export default class Nav extends Component {

    componentWillMount() {
        VarStore.on("change", this.updateNav.bind(this))
        this.updateNav();
    }

    updateNav() {
        this.setState({navIsOpen: VarStore.navIsOpen, isLoggedIn: VarStore.isLoggedIn})
    }

    getStyles() {
        if (!this.state.navIsOpen) {
            return " collapsed"
        } else {
            return ""
        }
    }

    renderPrivateLink(link) {
        console.log(this.state)
        if (this.state.isLoggedIn) {
            return (
                <li>
                    {link}
                </li>
            )
        }
    }

    render() {

        return (
            <div className={"nav" + this.getStyles()}>
                <div className="container">
                    <h1>
                        <a href="/">Dead Cow
                            <h3>at The Tannery</h3>
                        </a>
                    </h1>
                    <div className="links">

                        <ul>
                            {/* <li><a href="/specials"><span>Daily </span>Specials</a></li> */}
                            <li>
                                <a href="/menu">Full Menu</a>
                            </li>
                            <li>
                                <a href="/about">About</a>
                            </li>

                        </ul>
                        <div className="social">
                            <a href="https://www.facebook.com/deadcowsc" target="_blank"><img src="/assets/social/facebook.png" alt="facebook"/></a>
                            <a href="https://twitter.com/deadcowsc" target="_blank"><img src="/assets/social/twitter.png" alt="twitter"/></a>
                            <a href="https://www.instagram.com/deadcowsc" target="_blank"><img src="/assets/social/instagram.png" alt="instagram"/></a>
                            <a href="https://www.yelp.com/biz/the-dead-cow-santa-cruz"><img src="/assets/social/yelp.png" alt="yelp"/></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
