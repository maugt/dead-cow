import React, { Component } from 'react'
import MobileToggleSwitch from '../components/MobileToggleSwitch'
import Markdown from 'react-markdown'

import * as s from '../text/test.md'

export default class FullAbout extends Component {

	render() {
		console.log(s)
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
							<Markdown source={s} />
						</div>
					</div>
				</div>
			</div>
		)
	}
}
