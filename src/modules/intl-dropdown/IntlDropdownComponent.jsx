import React, { Component, PropTypes } from 'react'
import classNames from 'classnames'
import './intl-dropdown.scss'

export default class IntlDropdown extends Component {

  constructor(props) {
    super(props)
    this.state = {
      isOpen: false
    }
    this.toggleDropdown = this.toggleDropdown.bind(this)
    this.onChangeLanguage = this.onChangeLanguage.bind(this)
  }

  onChangeLanguage(language) {
    this.props.onChange(language)
    this.toggleDropdown()
  }

  toggleDropdown() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const dropdownClasses = classNames('dropdown', { open: this.state.isOpen })
    const buttonClasses = classNames(
      'btn', 'btn-secondary', 'dropdown-toggle', { active: this.state.isOpen })
    const buttonAriaExpanded = this.state.isOpen
    const { value, locales } = this.props

    return (
      <div className="intl-dropdown">
        <div className={dropdownClasses}>
          <button
            className={buttonClasses}
            type="button"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded={buttonAriaExpanded}
            onClick={this.toggleDropdown}>
            {value}
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenu">
            {locales.map(locale =>
              <button
                className="dropdown-item"
                type="button"
                key={locale.language}
                onClick={() => this.onChangeLanguage(locale.language)}>
                {locale.label}
              </button>
            )}
          </div>
        </div>
      </div>
    )
  }
}

IntlDropdown.propTypes = {
  value: PropTypes.string,
  locales: PropTypes.array.isRequired,
  onChange: PropTypes.func.isRequired
}
