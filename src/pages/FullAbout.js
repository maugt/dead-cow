import React, { Component } from 'react'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import Markdown from 'react-markdown'

import name from '../text/about-name.md'
import concept from '../text/about-concept.md'
import chef from '../text/about-chef.md'

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
							<div id="about-name">
								<h2>The Name</h2>
								<img alt="" src='/assets/salz-tannery.png' />
								<Markdown source={name} />
							</div>
							<div id="about-concept">
								<h2>The Concept </h2>
								<img alt="" src='/assets/Salsa.jpg' />
								<Markdown source={concept} />
							</div>
							<div id="about-chef">
								<h2>The Chef</h2>
								<Markdown source={chef} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
