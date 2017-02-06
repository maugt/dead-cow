import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, IndexRedirect, Router, browserHistory} from 'react-router'
import App from './app';
import OpeningSoon from './components/OpeningSoon'
import './index.css';

ReactDOM.render(
	<Router history={browserHistory}>
		<Route path='/' component={App}>
			<IndexRedirect to="/opening-soon"/>
			<Route path='/opening-soon' component={OpeningSoon}/>
		</Route>
		{/* <IndexRedirect path='/opening-soon'/> */}
	</Router>
	 ,
	document.getElementById('app')
);
