import React, {
	Component
} from 'react';
import './app.css';
import Nav from './components/Nav'
import Cover from './components/Cover'
import Map from './components/GoogleMap'
import MenuFavorites from './components/MenuFavorites'

class App extends Component {
	render() {
		return (
			<div>
			<div className="small">
				<Nav/>
			</div>
			<div className="mobile">
				<Nav/>
			</div>
			<Cover/>
			<Map/>
			<MenuFavorites/>
			<img src="" alt="" className="breakup"/>
			</div>
		);
	}
}

export default App;
