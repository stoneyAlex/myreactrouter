/*
 * @Author: shimingxia
 * @Date: 2022-08-19 16:45:50
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 16:52:18
 * @Description: 
 */
import React from "react";

export default class Login extends React.Component {
  login = () => {
    localStorage.setItem('login', true)
    let to = '/'
    if(this.props.location.state) {
      to = this.props.location.state.from || '/'
    }
    this.props.history.push(to)
  }
  render() {
    return (
      <button onClick={this.login}>登录</button>
    )
  }
}