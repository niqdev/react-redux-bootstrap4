import React, { PropTypes } from 'react'
import { Link } from 'react-router'

export default function App({ children }) {
  return (
    <div className="container">
      <div className="jumbotron">
        <h1>react-redux-bootstrap4</h1>
        <Link to="/gallery">Gallery</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/intl">Intl</Link>
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
