import React from 'react'
import { Route, IndexRoute } from 'react-router'
import { App, Home, Counter } from '../modules'

const Gallery = () => <div>GALLERY</div>
const NotFound = () => <div>NOT FOUND</div>

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="gallery" component={Gallery} />
    <Route path="counter" component={Counter} />
    <Route path="*" component={NotFound} />
  </Route>
)
