import React, {
	Component
} from 'react'
import * as Actions from '../actions/Actions'
import Rebase from 're-base'
import VarStore from '../stores/VarStore'
import UUID from 'uuid'
import data from '../menu.json'

export default class FullMenu extends Component {

	constructor(){
		super();

		this.state = {
				items:{},
				sections: {

				},
				notes:[]
		}
		this.base = Rebase.createClass({
			apiKey: "AIzaSyB3SNrTzMXAJb6zWhjwD4TDSnITCStq3KU",
			authDomain: "the-dead-cow.firebaseapp.com",
			databaseURL: "https://the-dead-cow.firebaseio.com",
			storageBucket: "the-dead-cow.appspot.com",
			messagingSenderId: "270874696443"
		}, 'app')

		this.base.post('/menu', {
			data: data
		})

		// this.base.fetch('menu/items', {
    // context: this,
    // asArray: true
	  // }).then(data => {
		// 	this.setState({
		// 		items: data
		// 	})
	  // }).catch(error => {
	  //   //handle error
	  // })
	}

toggleNav(){
	Actions.toggleNav();
}

componentDidMount(){
	VarStore.on("change", this.updateNav.bind(this))
	this.updateNav();

	this.base.bindToState('menu/items', {
		context: this,
		state: 'items',
		asArray: true
	})
	this.base.bindToState('menu/sections', {
		context: this,
		state: 'sections',
		asArray: true
	})
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

renderItem(item){
	return(
		<div key={UUID.v4()} className="menu-item">
			<h4>{item.title}</h4>
		</div>
	)
}

renderItems(section, isSub){
	if(data.items){
		let items = data.items
		let toReturn = []
		items.map(item => {
			if(isSub){
				if(section && item.subCategory && item.subCategory.indexOf(section) >-1){
					toReturn.push(this.renderItem(item))
				}
			}else{
				if(section && item.category && !item.subCategory && item.category.indexOf(section) >-1){
					toReturn.push(this.renderItem(item))
				}
			}


		})

	return toReturn
	}
}

renderSubSections(section){
	let subSec = []
	if(section.sub)
	{	section.sub.map(sub => {
		subSec.push(
			<div key={UUID.v4()} className="menu-subsection">
				<h3>{sub.title}</h3>
				{this.renderItems(sub.slug, true)}
			</div>
		)
	})
	return subSec;
	}
}

renderMenu(){
	let sec = [];
	if(data.sections){
		data.sections.map(section => {
			sec.push(
				<div key={UUID.v4()} className="menu-section">
					<h2>{section.title}</h2>
					{this.renderItems(section.slug, false)}
					{this.renderSubSections(section)}
				</div>
			)
		})
		return sec;
	}
}

render() {

	console.log(data)
	return (
		<div className="full-menu">
			<div className="wrapper">
				<div className="container">
					{this.renderMenu()}
				</div>
			</div>
	</div>
	)
}
}
