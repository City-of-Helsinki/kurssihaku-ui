import {combineReducers} from 'redux'
import {LocaleReducer} from './LocaleReducer'
import {CourseReducer} from './CourseReducer';


const rootReducer = combineReducers({
    locale: LocaleReducer,
    courses: CourseReducer,
})

export default rootReducer
