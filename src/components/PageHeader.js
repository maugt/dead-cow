import React, { Component } from 'react'

export default class ContactInfo extends Component {

	render() {
		return (
			<div className="page-header">
				<img src={"/assets/" + this.props.img + ".jpg"} alt="" />
				<h1>{this.props.title}</h1>
				{this.props.subtitle && <h3>{this.props.subtitle}</h3>}
			</div>
		)
	}
}
