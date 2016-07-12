import React from 'react'
import ReactDOM from 'react-dom'
import configureStore from './store/configureStore'
import Root from './containers/Root'
import { addLocaleData } from 'react-intl'
import en from 'react-intl/locale-data/en'
import it from 'react-intl/locale-data/it'

/*eslint-disable */
import 'bootstrap-css'
/*eslint-enable */

addLocaleData(en)
addLocaleData(it)
const store = configureStore()

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
)
