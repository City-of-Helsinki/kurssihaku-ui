import {LOCALE_SET} from '../constants/constants'

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => dispatch =>{
    localStorage.allLang = lang
    dispatch(localeSet(lang))
}

