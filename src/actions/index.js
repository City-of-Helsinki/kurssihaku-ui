import {LOCALE_SET, GET_ALL_COURSES, GET_ALL_COURSES_ERROR} from '../constants/constants'
import axios from 'axios'

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => dispatch =>{
    localStorage.allLang = lang
    dispatch(localeSet(lang))
}

export const getAllCourses = () =>dispatch=>{
    axios.get('https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/event/')
        .then(res=>{
            dispatch({
                type: GET_ALL_COURSES,
                payload: res.data.data,
            })
        })
        .catch(err=>{
            dispatch({
                type: GET_ALL_COURSES_ERROR,
                payload: err,
            })
        })
}
