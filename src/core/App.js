import React, { PropTypes } from 'react'
import { Link } from 'react-router'
import { Counter } from '../modules'

export default function App({ children }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>react-redux-bootstrap4</h1>
        <Counter />
        <Link to="/gallery">Gallery</Link>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
