import React, { PropTypes } from 'react'
import Navbar from '../navbar/NavbarComponent'
import './app.scss'

export default function App({ children }) {
  return (
    <div>
      <Navbar />
      <div className="container">
        {children}
      </div>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}
