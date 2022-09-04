/*
 * @Author: shimingxia
 * @Date: 2022-08-19 15:50:58
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 16:32:02
 * @Description: 
 */
import React, { Component } from 'react'
import { UserAPI } from '../utils';
export default class UserDetail extends Component {
  state = {user: {}}
  componentDidMount() {
    let user = this.props.location.state
    if(!user) {
      let id = this.props.match.params.id
      user = UserAPI.find(id)
    }
    if(user) {
      this.setState({user: user})
    }
  }
  render() {
    let {user} = this.state
    return (
      <div>
        <p>ID: {user.id}</p>
        <p>用户名：{user.username}</p>
      </div>
    )
  }
}