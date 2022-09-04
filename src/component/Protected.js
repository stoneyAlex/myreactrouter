/*
 * @Author: shimingxia
 * @Date: 2022-08-19 16:45:58
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 16:49:49
 * @Description: 
 */
import React from 'react'
import {Route, Redirect} from '../react-router-dom'

export default function Protected(props) {
  const {path, component: RouteComponent} = props
  return (
    <Route
      path={path}
      render = {
        (routeProps) => (
          localStorage.getItem('login') ? <RouteComponent {...routeProps} /> : <Redirect to={{pathname: '/login', state: {from: path}}} />
        )
      }
    >

    </Route>
  )
}