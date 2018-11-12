import {GET_ALL_COURSES, GET_ALL_COURSES_ERROR, GET_ALL_COURSES_KEYWORD, GET_ALL_COURSES_KEYWORD_ERROR} from '../constants/constants'

const defaultState = {
    allCourses: [],
    allCoursesError: null,
    allCoursesLoading: false,
    
    allCoursesKeyword: [],
    allCoursesKeywordError: null,
    allCoursesKeywordLoading: false,
}

export const CourseReducer = (state = defaultState, action)=>{
    switch(action.type){
        case GET_ALL_COURSES:
            return {
                ...state,
                allCourses: action.payload,                
                allCoursesError: null,
                allCoursesLoading: false,
            }
        case GET_ALL_COURSES_ERROR:
            return {
                ...state,
                allCoursesError: action.payload,
                allCoursesLoading: false,
            }
        case GET_ALL_COURSES_KEYWORD:
            return {
                ...state,
                allCoursesKeyword: action.payload, 
                allCoursesKeywordError: null,
                allCoursesKeywordLoading: false,
            }
        case GET_ALL_COURSES_KEYWORD_ERROR:
            return {
                ...state,
                allCoursesKeywordError: action.payload,
                allCoursesKeywordLoading: false,
            }
        default:
            return state;
    }
}
