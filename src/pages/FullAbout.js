import React, { Component } from 'react'
import PageHeader from '../components/PageHeader'
import Markdown from 'react-markdown'

import name from '../text/about-name.md'
import concept from '../text/about-concept.md'
import chef from '../text/about-chef.md'

export default class FullAbout extends Component {

	render() {
		document.title = 'Bistro One Twelve - About'
		return (
			<div className='about'>
				<PageHeader img='salad' title='About' subtitle='Decidedly Local & Aggressively Seasonal' />
				<div className='full-about'>
					<div className='container'>
						<div className='page-content'>
							<div className='section'>
								<h2><span id='about-name' ></span>The Name</h2>
								<img alt='' src='/assets/salz-tannery.png' />
								<Markdown source={name} />
							</div>
							<div className='section'>
								<h2><span id='about-concept' ></span>Bistro Cuisine</h2>
								<img alt='' src='/assets/salad.jpg' />
								<Markdown source={concept} />
							</div>
							<div className='section'>
								<h2><span id='about-chef' ></span>The Chef</h2>
								<Markdown source={chef} />
							</div>
						</div>
					</div>
				</div>
			</div>
		)
	}
}
