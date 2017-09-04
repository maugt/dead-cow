import React from 'react';
import ReactDOM from 'react-dom';
import { Route, IndexRoute, IndexRedirect, Router, browserHistory } from 'react-router'
import App from './App';
import OpeningSoon from './pages/OpeningSoon'
import Home from './pages/Home'
import MenuIndex from './pages/MenuIndex'
import FullAbout from './pages/FullAbout'
import Login from './pages/Login'
import Logout from './pages/Logout'
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<Route component={Home}>
				<IndexRoute />
				<IndexRedirect to="/opening-soon"></IndexRedirect>
				<Route path='/opening-soon' component={OpeningSoon}></Route>

			</Route>
			<Route path="/login" component={Login}></Route>
			<Route path="/logout" component={Logout}></Route>
			<Route path="/menus" component={MenuIndex}>

			</Route>
			<Route path="/about" component={FullAbout}></Route>
			<Route path="*">
				<IndexRedirect to='/'></IndexRedirect>
			</Route>
		</Route>
	</Router>, document.getElementById('app'))
