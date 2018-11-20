import {GET_ALL_COURSES, GET_ALL_COURSES_ERROR, LOADING} from '../constants/constants'

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
        case LOADING:
            return {
                ...state,
                allCoursesLoading: true,
            }
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
        default:
            return state;
    }
}
