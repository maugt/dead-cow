import React, {
	Component
} from 'react'

export default class Nav extends Component {

render() {

	return (
		<nav>
			<div className="container">
			<h1><a href="/">Dead Cow <span>at The Tannery</span></a></h1>
			<ul>
				{/* <li><a href="/specials">Daily Specials</a></li> */}
				{/* <li><a href="/menu">Menu</a></li> */}
				<li><a href="https://www.facebook.com/deadcowsc" target="_blank"><img src="/assets/social/facebook.png" alt="facebook"/></a></li>
				<li><a href="https://twitter.com/deadcowsc" target="_blank"><img src="/assets/social/twitter.png" alt="twitter"/></a></li>
				<li><a href="https://www.instagram.com/deadcowsc" target="_blank"><img src="/assets/social/instagram.png" alt="instagram"/></a></li>
				{/* <li><a href="#yelp"><img src="/assets/social/yelp.png" alt="yelp"/></a></li> */}

			</ul>
			</div>
		</nav>
	)
}
}
