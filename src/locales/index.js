import Immutable from 'immutable'
import { get as getLocaleStorage, put as putLocalStorage } from '../core/storage'
import localeEn from './locale-en.json'
import localeIt from './locale-it.json'

const DEFAULT_LOCALE = 'defaultLocale'

/*eslint-disable */
const localesMap = Immutable.Map({
  en: localeEn,
  it: localeIt
})
/*eslint-enable */

/**
 *
 */
export const locales = localesMap.valueSeq().toArray()

/**
 *
 */
export function getDefault() {
  const locale = getLocaleStorage(DEFAULT_LOCALE)
  if (localesMap.has(locale)) {
    // console.log(`Found locale: ${locale}`)
    return localesMap.get(locale)
  }
  // console.log('Use default en locale')
  return localeEn
}

/**
 *
 */
export function setDefault(locale) {
  putLocalStorage(DEFAULT_LOCALE, locale)
}
