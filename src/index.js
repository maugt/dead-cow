import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, IndexRedirect, Router, browserHistory} from 'react-router'
import App from './App';
import OpeningSoon from './pages/OpeningSoon'
import Home from './pages/Home'
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
		<IndexRedirect to="/opening-soon"/>
		<Route component={Home}>
			<IndexRoute/>
			<Route path='/opening-soon' component={OpeningSoon}/>
		</Route>
		</Route>
	</Router>
	 ,
	document.getElementById('app')
);
