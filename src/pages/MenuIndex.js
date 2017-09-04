import React, { Component } from 'react'
import firebase from 'firebase'
import C from '../constants/credentials/FirebaseConfig.json'
import Markdown from 'react-markdown'
import MobileToggleSwitch from '../components/MobileToggleSwitch'

import menuTop from '../text/menu-top.md'
import cafeMenu from '../text/cafe-menu.md'
import bodegaMenu from '../text/bodega-menu.md'
import bistroMenu from '../text/bistro-menu.md'

firebase.initializeApp(C)

export default class FullMenu extends Component {


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

		document.title = "Dead Cow - Menus"
		return (
			<div className="menu">
				<div className="background-image">
					<div className="wrapper">
						<div className="container">
							<MobileToggleSwitch />
							<div className="page-front-matter">
								<h1>Menus</h1>
							</div>
						</div>
					</div>
				</div>
				<div className="full-about">
					<div className="section">
						<div className="container">
							<div className="page-content">
								<h2>The Dead Cow Cuisine</h2>
								<Markdown source={menuTop} />
							</div>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="page-content">
								<Markdown source={cafeMenu} />
							</div>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="page-content">

								<Markdown source={bodegaMenu} />
							</div>
						</div>
					</div>
					<div className="section">
						<div className="container">
							<div className="page-content">

								<Markdown source={bistroMenu} />
							</div>
						</div>
					</div>
				</div>
			</div>

		)
	}

}