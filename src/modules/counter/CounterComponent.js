import React, { Component, PropTypes } from 'react'
import { FormattedMessage } from 'react-intl'
import './counter.scss'

export default class Counter extends Component {

  getMessage() {
    return this.props.counter % 2 === 0 ? <FormattedMessage id="counter.even" /> :
      <FormattedMessage id="counter.odd" />
  }

  handleIncrement() {
    this.props.actions.increment()
  }

  handleDecrement() {
    this.props.actions.decrement()
  }

  render() {
    return (
      <div className="my-counter center-block">
        <div className="row m-b-2">
          <div className="col-sm-6">{this.props.counter}</div>
          <div className="col-sm-6 counter-label">{this.getMessage()}</div>
        </div>
        <div className="row center-block">
          <div className="col-xs-6">
            <button
              className="btn btn-primary-outline btn-block"
              onClick={() => this.handleDecrement()}>-
            </button>
          </div>
          <div className="col-xs-6">
            <button
              className="btn btn-success-outline btn-block"
              onClick={() => this.handleIncrement()}>+
            </button>
          </div>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}
