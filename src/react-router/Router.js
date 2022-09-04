/*
 * @Author: shimingxia
 * @Date: 2022-08-17 18:50:04
 * @LastEditors: shimingxia
 * @LastEditTime: 2022-08-19 15:40:16
 * @Description: 
 */
import React from 'react';
import RouteContext from './RouteContext'

class Router extends React.Component {
  static computeRootMatch(pathname) {
    return { path: '/', url: '/', params: {}, isExact: pathname === '/' }
  }
  constructor(props) {
    super(props)
    this.state = {
      location: props.history.location
    }
    let listener = (location) => {
      this.setState({location})
    }
    this.unlisten = props.history.listen(listener)
  }
  componentWillUnmount() {
    this.unlisten()
  }
  render() {
    let value = {
      history: this.props.history,
      location: this.state.location,
      match: Router.computeRootMatch(this.state.location.pathname)
    } 
    return (
      <RouteContext.Provider value={value}>
        {this.props.children}
      </RouteContext.Provider>
    ) 
  }
}

export default Router