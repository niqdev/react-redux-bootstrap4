import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from '../reducers'
import createLogger from 'redux-logger'
import thunk from 'redux-thunk'
import DevTools from '../containers/DevTools'

const logger = createLogger()

const finalCreateStore = compose(
  // development middleware
  applyMiddleware(logger, thunk),
  // enable Redux DevTools
  DevTools.instrument()
)(createStore)

module.exports = function configureStore(initialState) {
  const store = finalCreateStore(rootReducer, initialState)

  // hot reload reducers
  if (module.hot) {
    module.hot.accept('../reducers', () =>
      store.replaceReducer(require('../reducers').default)
    )
  }

  return store
}
