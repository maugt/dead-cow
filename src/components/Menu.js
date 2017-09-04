import { Component } from 'react'
import firebase from 'firebase'
import C from '../constants/credentials/FirebaseConfig.json'

firebase.initializeApp(C)

export default class Menu extends Component {


	componentWillMount() {
		this.firebaseRef = firebase.database().ref('menu');

		this.firebaseRef.child('items').on('value', function (dataSnapshot) {

			this.setState({ items: dataSnapshot.val() });
		}.bind(this));


	}

	componentWillUnmount() {
		this.firebaseRef.off()
	}

	render() {
		return null
	}

}