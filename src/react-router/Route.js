/*
 * @Author: shimingxia
 * @Date: 2022-08-17 18:50:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:16:37
 * @Description: 
 */
import React, { Component } from 'react'
import RouteContext from './RouteContext'
import matchPath from './matchPath.js'

export default class Route extends Component {
  static contextType = RouteContext
  render() {
    const {history, location} = this.context
    const {component: RouteComponent, render, computedMatch, children} = this.props
    const match = computedMatch ? computedMatch : matchPath(location.pathname, this.props)
    const routeProps = {history, location}
    let element = null
    if(match) {
      routeProps.match = match
      this.context.params = match.params
      if (RouteComponent) {
        element = <RouteComponent {...routeProps} />
      } else if(render) {
        element = render(routeProps)
      } else if(children) {
        element = children(routeProps)
      } else {
        element = null
      }
    } else {
      if(children) {
        element = children(routeProps)
      } else {
        element = null
      }
    }
    return element
  }
}