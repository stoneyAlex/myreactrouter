/*
 * @Author: shimingxia
 * @Date: 2022-08-19 16:22:12
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 16:59:12
 * @Description: 
 */
import React from 'react';
import { UserAPI } from '../utils';
import { Link } from '../react-router-dom'

export default class userList extends React.Component {
  state = {users: []}
  componentDidMount() {
    let users = UserAPI.list()
    this.setState({users})
  }
  render() {
    return (
      <ul>
        {
          this.state.users.map((user, index) => {
            return (
              <li key={user.id}>
                <Link to = {{pathname: `/user/detail/${user.id}`, state: user}}>{user.username}</Link>
              </li>
            )
          })
        }
      </ul>
    )
  }
}