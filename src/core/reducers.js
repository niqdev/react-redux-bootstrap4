import { combineReducers } from 'redux'
import { intlReducer } from 'react-intl-redux'
import counter from '../modules/counter/CounterReducer'

const rootReducer = combineReducers({
  intl: intlReducer,
  counter
})

export default rootReducer
