import React from 'react'
import { Link } from 'react-router'

export default function NavbarComponent() {
  return (
    <nav className="navbar navbar-static-top navbar-light bg-faded m-b-1">
      <Link to="/" className="navbar-brand">Home</Link>
      <div className="nav navbar-nav">
        <Link to="/gallery" className="nav-item nav-link">Gallery</Link>
        <Link to="/counter" className="nav-item nav-link">Counter</Link>
        <Link to="/intl" className="nav-item nav-link">Intl</Link>
      </div>
    </nav>
  )
}
