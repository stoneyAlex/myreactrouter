/*
 * @Author: shimingxia
 * @Date: 2022-08-19 16:16:52
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 16:20:12
 * @Description: 
 */
import React from 'react';
import { UserAPI } from '../utils';
import {Prompt} from '../react-router'

export default class UserAdd extends React.Component {
  usernameRef = React.createRef()
  state = {isBlocking: false}
  handleSubmit = (event, data) => {
    event.preventDefault();
    this.setState({isBlocking: false}, () => {
      let username = this.usernameRef.current.value;
      UserAPI.add({id: Date.now() + '', username: username})
      this.props.history.push('/user/list')
    }) 
  }
  render() {
    return (
      <>
        <Prompt
          when = {this.state.isBlocking}
          message = {
            (location) => `请问你确定离开当前页面，跳转到${location.pathname}吗？`
          }
        />
        <form onSubmit={this.handleSubmit}>
          <input type='text' ref={this.usernameRef} onChange={event => {
            this.setState({ isBlocking: event.target.value.length > 0 })
          }}></input>
          <button type='submit'>提交</button>
        </form>
      </>
    )
  }
}