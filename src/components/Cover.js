import React, {
	Component
} from 'react'

export default class Cover extends Component {

render() {

	return (
		<cover id="cover">
		<div id="background-image">
			<div className="wrapper">
			<div className="container">
			<div className="front-matter">
					<img className="logo" src="/assets/logo-light.png" alt="The Dead Cow at The Tannery logo"/>
					<h2 id='slogan'>Decidedly Local,<br/>Aggresively Seasonal</h2>
			</div>
			<div className="info">
					<p id="info"><a href="https://www.google.com/maps/dir//1010+River+St,+Santa+Cruz,+CA+95060/@36.9867113,-122.0317947,17z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x808e4037ab7bf8ab:0xc27252656c7dbec7!2m2!1d-122.029606!2d36.986707">1010 River Street, Santa Cruz, CA 95060</a> | <a href="tel:+18312345356">831.234.5356</a> | Opening Soon...</p>
			</div>
				</div>
				</div>
			</div>
		</cover>
	)
}
}
