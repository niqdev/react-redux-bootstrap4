import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import { IntlProvider } from 'react-intl-redux'
import { Router, browserHistory } from 'react-router'
import routes from '../router/routes'
import DevTools from './DevTools'

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <IntlProvider>
        <div>
          <Router history={browserHistory} routes={routes} />
          <DevTools />
        </div>
      </IntlProvider>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
