import React, { Component } from 'react'
import Cover from '../components/Cover'
import GoogleMap from '../components/GoogleMap'
// import MenuFavorites from '../components/MenuFavorites'
import DailySpecials from '../components/DailySpecials'

import About from '../components/About'

import name from '../text/about-name-short.md'
import concept from '../text/about-concept-short.md'
import chef from '../text/about-chef-short.md'

export default class Home extends Component {

	render() {

		return (
			<div className="home">
				<Cover children={this.props.children} />

				<About slug={'name'} />
				<About slug={'concept'} />
				<About slug={'chef'} />

				<img className="breakup" src="/assets/Veggies.jpg" alt="" />

				<GoogleMap />
			</div>
		)
	}
}
