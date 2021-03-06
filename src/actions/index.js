import {
    LOCALE_SET, 

    LOADING,

    GET_ALL_COURSES, 
    GET_ALL_COURSES_ERROR,

    GET_ALL_COURSES_KEYWORD, 
    GET_ALL_COURSES_KEYWORD_ERROR,
} from '../constants/constants'
import axios from 'axios'

const linkedCourseBaseURL = 'https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/event'
const courseKeywordBaseURL = 'https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/keyword'

export const localeSet = lang => ({
    type: LOCALE_SET,
    lang,
})

export const setLocale = lang => dispatch =>{
    localStorage.allLang = lang
    dispatch(localeSet(lang))
}

export const getAllCourses = () =>dispatch=>{
    dispatch(loading())
    axios.all(
        [
            axios.get(linkedCourseBaseURL),
            axios.get(linkedCourseBaseURL + '/?page=2'),
            axios.get(linkedCourseBaseURL + '/?page=3'),
            axios.get(linkedCourseBaseURL + '/?page=4'),
            axios.get(linkedCourseBaseURL + '/?page=5'),
            axios.get(linkedCourseBaseURL + '/?page=6'),
        ]
    )    
        .then(
            axios.spread((page1, page2, page3, page4, page5, page6)=>{
                const page1Data = page1.data.data
                const page2Data = page2.data.data
                const page3Data = page3.data.data
                const page4Data = page4.data.data
                const page5Data = page5.data.data
                const page6Data = page6.data.data

                const allData = page1Data.concat(page2Data).concat(page3Data).concat(page4Data).concat(page5Data).concat(page6Data)
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
export const getCoursesKeyword = ()=>dispatch=>{
    dispatch(loading())
    axios.all(
        [
            axios.get(courseKeywordBaseURL),
            axios.get(courseKeywordBaseURL + '/?page=2'),
            axios.get(courseKeywordBaseURL + '/?page=3'),
            axios.get(courseKeywordBaseURL + '/?page=4'),
        ]
    )    
        .then(
            axios.spread((page1, page2, page3, page4)=>{
                const page1Data = page1.data.data
                const page2Data = page2.data.data
                const page3Data = page3.data.data
                const page4Data = page4.data.data

                const allData = page1Data.concat(page2Data).concat(page3Data).concat(page4Data)
                dispatch({
                    type: GET_ALL_COURSES_KEYWORD,
                    payload: allData,
                })
            })
        ) 
        .catch(err=>{
            dispatch({
                type: GET_ALL_COURSES_KEYWORD_ERROR,
                payload: err,
            })
        })
}


//while content loading
export const loading = () =>{
    return {
        type: LOADING,
    }
}
