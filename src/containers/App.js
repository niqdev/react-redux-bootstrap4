import React, { PropTypes } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as CounterActions from '../actions/CounterActions'
import { Counter } from '../components'

export function App({ counter, actions }) {
  return (
    <div>
      <div>react-bootstrap4-ghpages</div>
      <Counter counter={counter} actions={actions} />
    </div>
  )
}

App.propTypes = {
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
