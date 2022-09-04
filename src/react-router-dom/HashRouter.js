/*
 * @Author: shimingxia
 * @Date: 2022-08-17 18:55:08
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 15:58:00
 * @Description: 
 */
import React, { Component } from 'react'
import {Router} from '../react-router'
import {createHashHistory} from '../history'

export default class HashRouter extends Component {
  history = createHashHistory(this.props)
  render() {
    return (
      <Router history={this.history}>
        {this.props.children}
      </Router>
    )
  }
}