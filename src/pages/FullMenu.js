import React, {
	Component
} from 'react'
import * as Actions from '../actions/Actions'
import Rebase from 're-base'
import VarStore from '../stores/VarStore'

export default class FullMenu extends Component {

	constructor(){
		super();
		this.base = Rebase.createClass({
			apiKey: "AIzaSyB3SNrTzMXAJb6zWhjwD4TDSnITCStq3KU",
			authDomain: "the-dead-cow.firebaseapp.com",
			databaseURL: "https://the-dead-cow.firebaseio.com",
			storageBucket: "the-dead-cow.appspot.com",
			messagingSenderId: "270874696443"
		}, 'app')

		this.base.fetch('menu', {
    context: this,
    asArray: false
	  }).then(data => {
			this.setState({
				menu: data
			})
	  }).catch(error => {
	    //handle error
	  })
	}

toggleNav(){
	Actions.toggleNav();
}

componentWillMount(){
	VarStore.on("change", this.updateNav.bind(this))
	this.updateNav();

	this.base.bindToState('menu/sections', {
		context: this,
		state: 'sections',
		asArray: false
	})

	this.base.bindToState('menu/items', {
		context: this,
		state: 'items',
		asArray: false
	})

	this.base.bindToState('menu/notes', {
		context: this,
		state: 'notes',
		asArray: false
	});

}

updateNav(){
	this.setState({
		navIsOpen: VarStore.navIsOpen
	})
}

getStyles(){
	if(!this.state.navIsOpen){
		return " collapsed"
	}else{
		return ""
	}
}

render() {

	console.log(this.state)
	return (
		<div className="cover">
			<div id="background-image">
				<div className="wrapper">
					<div className="container">
						<div className="front-matter">
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
}
