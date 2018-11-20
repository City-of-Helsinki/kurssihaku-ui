import {combineReducers} from 'redux'
import {LocaleReducer} from './LocaleReducer'
import {CourseReducer} from './CourseReducer';
import {CourseKeywordReducer} from './CourseKeywordReducer';


const rootReducer = combineReducers({
    locale: LocaleReducer,
    courses: CourseReducer,
    courseKeyword: CourseKeywordReducer,
})

export default rootReducer
