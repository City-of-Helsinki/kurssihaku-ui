import {LOCALE_SET, GET_ALL_COURSES, GET_ALL_COURSES_ERROR} from '../constants/constants'
import axios from 'axios'

const linkedCourseBaseURL = 'https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/event'

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => dispatch =>{
    localStorage.allLang = lang
    dispatch(localeSet(lang))
}

export const getAllCourses = () =>dispatch=>{
    axios.all(
        [
            axios.get(linkedCourseBaseURL),
            axios.get(linkedCourseBaseURL + '/?page=2'),
            axios.get(linkedCourseBaseURL + '/?page=3'),
            axios.get(linkedCourseBaseURL + '/?page=4'),
            axios.get(linkedCourseBaseURL + '/?page=5'),
        ]
    )    
        .then(
            axios.spread((page1, page2, page3, page4, page5)=>{
                const page1Data = page1.data.data
                const page2Data = page2.data.data
                const page3Data = page3.data.data
                const page4Data = page4.data.data
                const page5Data = page5.data.data

                const allData = page1Data.concat(page2Data).concat(page3Data).concat(page4Data).concat(page5Data)
                dispatch({
                    type: GET_ALL_COURSES,
                    payload: allData,
                })
            })
        ) 
        .catch(err=>{
            dispatch({
                type: GET_ALL_COURSES_ERROR,
                payload: err,
            })
        })
}
