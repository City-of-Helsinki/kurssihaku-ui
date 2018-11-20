import {GET_ALL_COURSES_KEYWORD, GET_ALL_COURSES_KEYWORD_ERROR, LOADING} from '../constants/constants'

const defaultState = {    
    allCoursesKeyword: [],
    allCoursesKeywordError: null,
    allCoursesKeywordLoading: false,
}

export const CourseKeywordReducer = (state = defaultState, action)=>{
    switch(action.type){
        case LOADING:
            return {
                ...state,
                allCoursesKeywordLoading: true,
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
