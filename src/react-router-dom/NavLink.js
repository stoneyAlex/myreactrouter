/*
 * @Author: shimingxia
 * @Date: 2022-08-19 17:02:32
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 17:14:27
 * @Description: 
 */
import React from 'react';
import { Route, Link } from '../react-router-dom';
export default function NavLink(props) {
  const {
    to,
    exact,
    className,
    activeClassName = 'active',
    style = {},
    activeStye = {},
    children,
  } = props;
  return (
    <Route path={to} exact={exact}>
      {
        ({match}) => {
          let linkProps = {
            className: match ? `${className} ${activeClassName}` :className,
            style: match ? {...style, ...activeStye} : style,
            to,
            children
          }
          return <Link {...linkProps} />
        }
      }
    </Route>
  )
}