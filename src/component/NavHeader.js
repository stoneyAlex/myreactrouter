/*
 * @Author: shimingxia
 * @Date: 2022-08-19 17:18:10
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:24:38
 * @Description: 
 */
import React from "react";
import { withRouter } from '../react-router-dom'
class NavHeader extends React.Component {
  render() {
    return (
      <div onClick={() => this.props.history.push('/')}>{this.props.title}</div>
    )
  }
}

export default withRouter(NavHeader)