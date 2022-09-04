import React from 'react'
import { __RouterContext as RouterContext } from '../react-router';

export default function withRouter(OldComponent) {
  return props => {
    return (
      <RouterContext.Consumer>
        {
          (value) => {
            return <OldComponent {...props} {...value} />
          }
        }
      </RouterContext.Consumer>
    )
  }
}