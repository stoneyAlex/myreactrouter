import React from 'react'
import RouteContext from './RouteContext'

export default function Prompt(props) {
  let value = React.useContext(RouteContext)
  React.useLayoutEffect(() => {
    if(props) {
      return value.history.block(props.message)
    }
  },[props.message, value.history])
  return null
}