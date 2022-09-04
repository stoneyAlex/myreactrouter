/*
 * @Author: shimingxia
 * @Date: 2022-08-17 18:38:38
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-18 15:34:37
 * @Description: 
 */
import React, { Component } from 'react'
export default class Home extends Component {
  render() {
    console.log(this.props.history)
    return (
      <div>
        <p>Home</p>
        <button onClick={() => this.props.history.push('/user')}>跳到/user</button>
      </div>
    )
  }
}