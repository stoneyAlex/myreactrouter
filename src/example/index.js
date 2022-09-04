/*
 * @Author: shimingxia
 * @Date: 2022-08-15 09:07:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:18:30
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Redirect, Link, NavLink } from './react-router-dom'
// import { HashRouter as Router, Route } from './react-router-dom'
import Home from './component/Home'
import User from './component/User'
import Profile from './component/Profile'
import Login from './component/Login'
import Protected from './component/Protected'
import NavHeader from './component/NavHeader'


ReactDOM.render(
  <Router getUserConfirmation = {window.confirm}>
    <NavHeader title='hello stoney' />
    <ul>
      <li><NavLink
      className='strong'
      style={{textDecoration: 'line-through'}}
      activeClassName='active'
      activeStye={{color: 'red'}}
      to='/'>首页</NavLink></li>
      <li><NavLink
      className='strong'
      style={{textDecoration: 'line-through'}}
      activeClassName='active'
      activeStye={{color: 'red'}}
      to='/user'>用户管理</NavLink></li>
      <li><NavLink
      className='strong'
      style={{textDecoration: 'line-through'}}
      activeClassName='active'
      activeStye={{color: 'red'}}
      to='/profile'>个人中心</NavLink></li>
    </ul>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path='/user' component={User} />
      <Protected path='/profile' component={Profile} />
      <Route path='/login' component={Login} />
      {/* <Route component={() => <div>404 not found</div>} /> */}
      <Redirect to='/' />
    </Switch>
  </Router>
  , document.getElementById('root')
)