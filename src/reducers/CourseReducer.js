import {GET_ALL_COURSES, GET_ALL_COURSES_ERROR} from '../constants/constants'

const defaultState = {
    allCourses: [],
    allCoursesError: null,
    allCoursesLoading: false,
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
        default:
            return state;
    }
}
