import React, {
	Component
} from 'react'

export default class MenuItem extends Component {

render() {

	return (
		<div className='MenuItem'>
			<h3 className='menuItemName'>Menu Favorites</h3>
			<h4 className="menuItemPrice"></h4>
			<p className="menuItemText"></p>
		</div>
	)
}
}
