import React, { Component } from 'react'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import Markdown from 'react-markdown'

export default class FullAbout extends Component {

	render() {
		document.title = "Dead Cow - About"
		return (
			<div className="about">
				<div className="background-image">
					<div className="wrapper">
						<div className="container">
							<MobileToggleSwitch />
							<div className="page-front-matter">
								<h1>About</h1>
								<h3>Decidedly Local; Aggressively Seasonal!</h3>
							</div>
						</div>
					</div>
				</div>
				<div className="full-about">
					<div className="container">
						<div className="page-content">
							<Markdown />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
