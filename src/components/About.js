import React, { Component } from 'react'
import Markdown from 'react-markdown'

export default class MiniAbout extends Component {


	render() {
		const s = require(`../text/about-${this.props.slug}-short.md`)

		return (
			<div className="page-content">
				<div className="container">
					<h2>
						About the {this.props.slug}
					</h2>
					<p>
						<Markdown source={s} />
						<a href={`about#about-${this.props.slug}`}> more... </a>
					</p>
				</div>
			</div>
		)
	}
}
