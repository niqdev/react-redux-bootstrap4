import { createStore, applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import createLogger from 'redux-logger'
import rootReducer from '../reducers'
import DevTools from '../DevTools'

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
      /*eslint-disable */
      store.replaceReducer(require('../reducers').default)
      /*eslint-enable */
    )
  }

  return store
}
