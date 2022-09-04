/*
 * @Author: shimingxia
 * @Date: 2022-08-19 15:54:12
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 15:56:24
 * @Description: 
 */
import React from 'react';
import RouteContext from './RouteContext'
import Lifecycle from './Lifecycle'

export default function Redirect(props) {
  return (
    <RouteContext.Consumer>
      {
        (value) => {
          return (
            <Lifecycle onMount={() => value.history.push(props.to)}></Lifecycle>
          )
        }
      }
    </RouteContext.Consumer>
  )
}