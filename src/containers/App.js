import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Link } from 'react-router'

import * as CounterActions from '../actions/CounterActions'
import { Counter } from '../components'

export function App({ counter, actions, children }) {
  return (
    <div>
      <div>react-bootstrap4-ghpages</div>
      <Counter counter={counter} actions={actions} />
      <Link to="/gallery">Gallery</Link>
      {children}
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired,
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    counter: state.counter
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CounterActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
