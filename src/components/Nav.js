import React, { Component } from 'react'

import VarStore from "../stores/VarStore"
import NavLinks from "../components/NavLinks"
import SocialLinks from '../components/SocialLinks'
import MobileToggleSwitch from '../components/MobileToggleSwitch'

export default class Nav extends Component {

	componentDidMount() {
		window.addEventListener('scroll', this.handleScroll.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('scroll', this.handleScroll);
	}

	handleScroll() {

		this.setState({
			shrink: window.scrollY > 10,
			navIsOpen: false
		})
	}

	componentWillMount() {
		VarStore.on("change", this.updateNav.bind(this))

		this.updateNav();
	}

	updateNav() {
		this.setState({ navIsOpen: VarStore.navIsOpen, isLoggedIn: VarStore.isLoggedIn })
	}

	getShrink() {
		if (this.state.shrink) {
			return " shrink"
		}
		return ""
	}

	getCollapsed() {
		if (!this.state.navIsOpen) {
			return " collapsed"
		}
		return ""
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
			<div className={"nav" + this.getShrink()}>
				<div className={"container" + this.getCollapsed()}>
					<div className="nav-title">
						<a id="nav-title" href="/">
							<h1>Bistro One Twelve</h1>
							<h3>at The Tannery</h3>
						</a>
					</div>
					<div className="links">
						<NavLinks />
						<SocialLinks />
					</div>
				</div>
				<MobileToggleSwitch />
			</div>
		)
	}
}
