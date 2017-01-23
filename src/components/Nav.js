import React, {
	Component
} from 'react'

export default class Nav extends Component {

render() {

	return (
		<div id='nav'>
			<h1><a href="/">The Dead Cow</a></h1>
			<ul>
				<li><a href="/specials">Daily Specials</a></li>
				<li><a href="/menu">Menu</a></li>
			</ul>
		</div>
	)
}
}
