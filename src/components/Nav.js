import React, { Component } from 'react'

import VarStore from "../stores/VarStore"
import NavLinks from "../components/NavLinks"
import SocialLinks from '../components/SocialLinks'

export default class Nav extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {
		this.setState({
			shrink: window.scrollY > 10
		})
	}

	componentWillMount() {
		VarStore.on("change", this.updateNav.bind(this))

		this.updateNav();
	}

	updateNav() {
		this.setState({ navIsOpen: VarStore.navIsOpen, isLoggedIn: VarStore.isLoggedIn })
	}



	getStyles() {
		let styles = ""
		if (!this.state.navIsOpen) {
			styles += " collapsed"
		}
		if (this.state.shrink) {
			styles += " shrink"
		}
		return styles
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
						<NavLinks />
						<SocialLinks />
					</div>
				</div>
			</div>
		)
	}
}
