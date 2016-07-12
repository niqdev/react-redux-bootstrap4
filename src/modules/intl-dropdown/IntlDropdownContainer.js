import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { update as updateIntl } from 'react-intl-redux'
import IntlDropdownComponent from './IntlDropdownComponent'
import locales from '../../locales'

export default function IntlDropdown({ locale, onChangeIntl }) {
  return (
    <IntlDropdownComponent
      value={locale}
      locales={locales}
      onChange={onChangeIntl}/>
  )
}

IntlDropdown.propTypes = {
  value: PropTypes.string,
  onChangeIntl: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    locale: state.intl.locale
  }
}

const getMessages = (language) => {
  return locales.find(locale => {
    return locale.language === language
  }).messages
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeIntl: (language) => dispatch(updateIntl({
      locale: language,
      messages: getMessages(language)
    }))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntlDropdown);
