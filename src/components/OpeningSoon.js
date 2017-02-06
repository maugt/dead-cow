import React, {
	Component
} from 'react'
import * as Actions from '../actions/Actions'

export default class OpeningSoon extends Component {

toggleNav(){
	Actions.toggleNav();
}

render() {

	return (
		<div className="cover">
			<div id="background-image">
				<div className="wrapper">
					<div className="container">
						<div className="front-matter">
						<div className="mobile toggleSwitch"><a href="#" onClick={this.toggleNav.bind(this)}>+</a></div>
							<img className="logo small" src="/assets/logo-light.png" alt="The Dead Cow at The Tannery logo"/>
							<img className="logo mobile" src="/assets/icon-light.png" alt="Dead Cow at The Tannery Logo" />
							<div className="cover-text">
								<h2 id='slogan'>Decidedly Local,<br/>Aggresively Seasonal</h2>
								<h3>opening soon...</h3>
							</div>
						</div>
						<div className="info">
							<div id="info">
								<div>
									<a href="https://www.google.com/maps/dir//1010+River+St,+Santa+Cruz,+CA+95060/@36.9867113,-122.0317947,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xc27252656c7dbec7!2m2!1d-122.029606!2d36.986707">1010 River Street, Santa Cruz, CA 95060</a>
								</div>
								<div>
								<a href="tel:+18318547458">831.854.7458</a>
								</div>
								<div>
								<a>Opening Soon...</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
}
