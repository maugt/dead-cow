import React, {
	Component
} from 'react';
import './App.css';
import Nav from './components/Nav'
import OpeningSoon from './components/OpeningSoon'
import Map from './components/GoogleMap'
import MenuFavorites from './components/MenuFavorites'

class App extends Component {
	render() {
		return (
			<div>
			<Nav/>
			{this.props.children}
			{/* <OpeningSoon/>
			<Map/>
			<MenuFavorites/>
			<img src="" alt="" className="breakup"/> */}
			</div>
		);
	}
}

export default App;
