import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'

import { Router, useRouterHistory } from 'react-router'
import { createHashHistory } from 'history'

import routes from '../router/routes'

const appHistory = useRouterHistory(createHashHistory)({ queryKey: false })

export default function Root() {
  return (
    <Provider store={this.props.store}>
      <Router history={appHistory} routes={routes} />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
