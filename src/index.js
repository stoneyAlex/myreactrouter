/*
 * @Author: shimingxia
 * @Date: 2022-08-15 09:07:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:18:30
 * @Description: 
 */
import React from 'react';
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Switch, Link, useParams, useHistory, useLocation, useRouteMatch } from './react-router-dom'

function Home() {
  return <div>Home</div>
}

function UserDetail() {
  let params = useParams()
  console.log('params', params);
  let history = useHistory()
  console.log('history', history)
  let location = useLocation()
  console.log('location', location)
  let match = useRouteMatch({ path: '/user/detail/100', strict: true, sensitive: true })
  console.log('useRouteMatch: ', match)
  return <div>userDetail</div>
}

ReactDOM.render(
  <Router>
    <ul>
      <li><Link to = '/'>首页</Link></li>
      <li><Link to = {{pathname: '/user/detail/100', state: {id: 100, name: 'stoney'}}}>用户详情100</Link></li>
    </ul>
    <Switch>
      <Route path='/' exact component={Home} />
      <Route path="/user/detail/:id" component={UserDetail} />
    </Switch>
  </Router>
  , document.getElementById('root')
)