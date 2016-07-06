import React, { Component, PropTypes } from 'react'

export default class Counter extends Component {

  handleIncrement() {
    this.props.actions.increment()
  }

  handleDecrement() {
    this.props.actions.decrement()
  }

  render() {
    return (
      <div>
        <div>{this.props.counter}</div>
        <div>{this.props.counter % 2 === 0 ? 'even' : 'odd'}</div>
        <br />
        <div>
          <button onClick={() => { this.handleDecrement() }}>-</button>
          <button onClick={() => { this.handleIncrement() }}>+</button>
        </div>
      </div>
    )
  }
}

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  actions: PropTypes.object.isRequired
}
