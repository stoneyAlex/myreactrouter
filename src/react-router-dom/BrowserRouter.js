/*
 * @Author: shimingxia
 * @Date: 2022-08-17 18:58:59
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 15:37:15
 * @Description: 
 */
import React, { Component } from 'react'
import {Router} from '../react-router'
import {createBrowserHistory} from '../history'

export default class BrowserRouter extends Component {
  history = createBrowserHistory(this.props)

  render() {
    console.log(this.history)
    return (
      <Router history={this.history}>
        {this.props.children}
      </Router>
    )
  }
}