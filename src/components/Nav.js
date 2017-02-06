import React, {
	Component
} from 'react'

import VarStore from "../stores/VarStore"

export default class Nav extends Component {


	componentWillMount(){
    VarStore.on("change", this.updateNav.bind(this))
    this.updateNav();
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


		return (
					<div className={"nav" + this.getStyles()}>
						<div className="container">
							<h1><a href="/">Dead Cow <span>at The Tannery</span></a></h1>
							<div className="links">

							<ul>
								{/* <li><a href="/specials">Daily Specials</a></li> */}
								{/* <li><a href="/menu">Full Menu</a></li> */}

							</ul>
							<div className="social">
								<a href="https://www.facebook.com/deadcowsc" target="_blank"><img src="/assets/social/facebook.png" alt="facebook"/></a>
								<a href="https://twitter.com/deadcowsc" target="_blank"><img src="/assets/social/twitter.png" alt="twitter"/></a>
								<a href="https://www.instagram.com/deadcowsc" target="_blank"><img src="/assets/social/instagram.png" alt="instagram"/></a>
								<a href="https://www.yelp.com/biz/the-dead-cow-santa-cruz"><img src="/assets/social/yelp.png" alt="yelp"/></a>
							</div>
						</div>
						</div>
					</div>
		)
	}
}
