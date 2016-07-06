import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'
import DevTools from './DevTools'

export default function Root({ store }) {
  return (
    <Provider store={store}>
      <div>
        <App />
        <DevTools />
      </div>
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
