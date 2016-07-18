import React, { Component, PropTypes } from 'react'
import './counter.scss'

export default class Counter extends Component {

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
          <div className="col-xs-6">{this.props.counter}</div>
          <div className="col-xs-6 counter-label">{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        </div>
        <div className="row center-block">
          <div className="col-xs-6">
            <button className="btn btn-primary-outline btn-block" onClick={() => { this.handleDecrement() }}>-</button>
          </div>
          <div className="col-xs-6">
            <button className="btn btn-success-outline btn-block" onClick={() => { this.handleIncrement() }}>+</button>
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
