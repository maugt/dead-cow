import React, {Component} from 'react'

import VarStore from "../stores/VarStore"
import NavLinks from "../components/NavLinks"
import SocialLinks from '../components/SocialLinks'

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
                    <div className="nav-title">
                        <a id="nav-title" href="/">
                            <h1>Dead Cow</h1>
                            <h3>at The Tannery</h3>
                        </a>
                    </div>
                    <div className="links">
                        <NavLinks/>
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        )
    }
}
