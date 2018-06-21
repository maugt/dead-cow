import React from 'react'
import ReactDOM from 'react-dom'
import { Route, IndexRoute, IndexRedirect, Router, browserHistory } from 'react-router'
import App from './app'
import Home from './pages/Home'
import MenuIndex from './pages/Menu'
import About from './pages/About'
import './index.css'

ReactDOM.render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route component={Home}>
        <IndexRoute />
      </Route>
      <Route path='/menu' component={MenuIndex}>
      </Route>
      <Route path='/about' component={About}></Route>
      <Route path='*'>
        <IndexRedirect to='/'></IndexRedirect>
      </Route>
    </Route>
  </Router>, document.getElementById('app'))
