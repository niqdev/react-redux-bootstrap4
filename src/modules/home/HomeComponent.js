import React from 'react'
import { FormattedMessage } from 'react-intl'

export default function HomeComponent() {
  return (
    <div className="jumbotron">
      <h1 className="display-4">Boilerplate</h1>
      <p className="lead">react-redux-bootstrap4</p>
      <hr className="m-y-2" />
      <p className="lead">
        <a
          className="btn btn-primary btn-lg"
          href="https://github.com/niqdev/react-redux-bootstrap4"
          role="button">
          <FormattedMessage id="home.source" />
        </a>
      </p>
    </div>
  )
}
