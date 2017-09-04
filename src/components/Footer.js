import React, { Component } from 'react'
import NavLinks from './NavLinks'
import SocialLinks from './SocialLinks'
import ContactInfo from './ContactInfo'

export default class Footer extends Component {

	render() {

		return (
			<footer>
				<div className="container">
					<div className='footer'>
						<img className="footer-logo" src="/assets/icon-light.png" alt="Dead Cow at The Tannery Logo" />
						<div className="footer-nav">
							<h3>Navigation</h3>
							<NavLinks />
						</div>
						<div className="footer-social">
							<h3>Social</h3>
							<SocialLinks text={true} />
						</div>
						<div className="footer-contact">
							<h3>Contact Us</h3>
							<ContactInfo />
						</div>
					</div>
				</div>
			</footer>
		)
	}
}
