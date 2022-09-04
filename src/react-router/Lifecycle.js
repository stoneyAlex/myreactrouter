/*
 * @Author: shimingxia
 * @Date: 2022-08-19 15:56:44
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 15:57:53
 * @Description: 
 */
import React from "react";
export default class Lifecycle extends React.Component {
  componentDidMount() {
    this.props.onMount && this.props.onMount(this)
  }
  render() {
    return null
  }
}