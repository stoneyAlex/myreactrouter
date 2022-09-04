import React from 'react'
import RouteContext from './RouteContext'
import matchPath from './matchPath'

export function useHistory() {
  let contextValue = React.useContext(RouteContext)
  return contextValue.history
}

export function useLocation() {
  let contextValue = React.useContext(RouteContext)
  return contextValue.location
}

export function useParams() {
  let { params } = React.useContext(RouteContext)
  return params || {}
}

export function useRouteMatch(pathInfo) {
  let location = useLocation()
  let match = React.useContext(RouteContext).match
  return pathInfo ? matchPath(location.pathname, pathInfo) : match
}