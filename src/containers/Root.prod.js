import React, { PropTypes } from 'react'
import { Provider } from 'react-redux'
import App from './App'

export default function Root() {
  return (
    <Provider store={this.props.store}>
      <App />
    </Provider>
  )
}

Root.propTypes = {
  store: PropTypes.object.isRequired
}
