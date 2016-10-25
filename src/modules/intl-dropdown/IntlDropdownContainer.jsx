import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { update as updateIntl } from 'react-intl-redux'
import IntlDropdownComponent from './IntlDropdownComponent'
import { locales, setDefault as setDefaultLocale } from '../../locales'

export function IntlDropdown({ locale, onChangeIntl }) {
  return (
    <IntlDropdownComponent
      value={locale}
      locales={locales}
      onChange={onChangeIntl} />
  )
}

IntlDropdown.propTypes = {
  value: PropTypes.string,
  locale: PropTypes.string.isRequired,
  onChangeIntl: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    locale: state.intl.locale
  }
}

const getMessages = (language) => {
  const isLanguage = locale => locale.language === language
  return locales.find(isLanguage).messages
}

function mapDispatchToProps(dispatch) {
  return {
    onChangeIntl: (language) => {
      setDefaultLocale(language)
      dispatch(updateIntl({
        locale: language,
        messages: getMessages(language)
      }))
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IntlDropdown)
