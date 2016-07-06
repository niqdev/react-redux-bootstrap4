import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { Router, browserHistory } from 'react-router'
import routes from '../routes/index'
import DevTools from './DevTools'

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <Router history={browserHistory} routes={routes} />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
