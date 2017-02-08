import React, {
	Component
} from 'react'
import firebase from 'firebase'
import * as Actions from '../actions/Actions'
import VarStore from '../stores/VarStore'
import UUID from 'uuid'
import data from '../menu.json'

const config = {
	apiKey: "AIzaSyB3SNrTzMXAJb6zWhjwD4TDSnITCStq3KU",
	authDomain: "the-dead-cow.firebaseapp.com",
	databaseURL: "https://the-dead-cow.firebaseio.com",
	storageBucket: "the-dead-cow.appspot.com",
	messagingSenderId: "270874696443"
}

firebase.initializeApp(config)

export default class FullMenu extends Component {

toggleNav(){
	Actions.toggleNav();
}

componentWillMount(){

	VarStore.on("change", this.updateNav.bind(this))
	this.updateNav();
	this.firebaseRef = firebase.database().ref("menu")
	this.resetFirebase()

	this.firebaseRef.child('items').on('value', function(dataSnapshot) {
    var items = []
    dataSnapshot.forEach(function(childSnapshot) {
      var item = childSnapshot.val();
      item['.key'] = childSnapshot.key;
      items.push(item);
    });
    this.setState({
      items: items
    });
  }.bind(this));


	this.firebaseRef.child('sections').on('value', function(dataSnapshot) {
		var sections = [];
		dataSnapshot.forEach(function(childSnapshot) {
			var item = childSnapshot.val();
			item['.key'] = childSnapshot.key;
			sections.push(item);
		});
		this.setState({
			sections: sections
		});
	}.bind(this));


	this.firebaseRef.child('subSections').on('value', function(dataSnapshot) {
		var subSections = [];
		dataSnapshot.forEach(function(childSnapshot) {
			var item = childSnapshot.val();
			item['.key'] = childSnapshot.key;
			subSections.push(item);
		});
		this.setState({
			subSections: subSections
		});
	}.bind(this));

	this.firebaseRef.child('notes').on('value', function(dataSnapshot) {
		var notes = [];
		dataSnapshot.forEach(function(childSnapshot) {
			var item = childSnapshot.val();
			item['.key'] = childSnapshot.key;
			notes.push(item);
		});
		this.setState({
			notes: notes
		});
	}.bind(this));
}


resetFirebase(){

	this.firebaseRef.set({})
	let sortIndex = 0;
	for(let e of data.sections){
		e.sortIndex = sortIndex
		this.firebaseRef.child('sections').push(e)
		sortIndex++
	}
	sortIndex = 0;
	for(let e of data.subSections){
		e.sortIndex = sortIndex
		this.firebaseRef.child('subSections').push(e)
		sortIndex++
	}
	sortIndex = 0;
	for(let e of data.items){
		e.sortIndex = sortIndex
		this.firebaseRef.child('items').push(e)
		sortIndex++
	}
	sortIndex = 0;
	for(let e of data.notes){
		let f = {
			sortIndex: sortIndex,
			note: e
		}
		this.firebaseRef.child('notes').push(f)
		sortIndex++
	}
}

componentWillUnmount(){
	this.firebaseRef.off()
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

renderMenuItem(item){
	return(
		<div key={UUID.v4()} className="menu-item">
			<h4>{item.title}</h4>
		</div>
	)
}

renderMenuItems(section, isSub){
	if(data.items){
		let items = this.state.items
		let toReturn = []
		items.map(item => {
			if(isSub){
				if(section && item.subCategory && item.subCategory.indexOf(section) >-1){
					toReturn.push(this.renderMenuItem(item))
				}
			}else{
				if(section && item.category && !item.subCategory && item.category.indexOf(section) >-1){
					toReturn.push(this.renderMenuItem(item))
				}
			}
			return item
		})

	return toReturn
	}
}

renderMenuSubSections(section){
	let subSec = []
	if(this.state.subSections){
		this.state.subSections.map(sub => {
			if(sub.childOf.indexOf(section)>-1){
				subSec.push(
					<div key={UUID.v4()} className="menu-subsection">
						<h3>{sub.title}</h3>
						{this.renderMenuItems(sub.slug, true)}
					</div>
				)
			}
			return sub
		})
	}
	return subSec;
}

renderMenu(){
	let sec = [];
	if(this.state.sections){
		data.sections.map(section => {
			sec.push(
				<div key={UUID.v4()} className="menu-section">
					<h2>{section.title}</h2>
					{this.renderMenuItems(section.slug, false)}
					{this.renderMenuSubSections(section.slug)}
				</div>
			)
			return section
		})
		return sec;
	}
}

render() {
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
