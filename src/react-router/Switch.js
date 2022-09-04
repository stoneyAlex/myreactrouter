/*
 * @Author: shimingxia
 * @Date: 2022-08-19 15:42:46
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 15:50:01
 * @Description: 
 */
import React from 'react';
import RouteContext from './RouteContext'
import matchPath from './matchPath.js'

export default class Switch extends React.Component {
  static contextType = RouteContext
  render() {
    const { location } = this.context
    let element, match
    React.Children.forEach(this.props.children, (route) => {
      if(!match && React.isValidElement(route)) {
        element = route
        match = matchPath(location.pathname, route.props)
      }
    })
    return match ? React.cloneElement(element, { computedMatch: match }) : null
  }
}