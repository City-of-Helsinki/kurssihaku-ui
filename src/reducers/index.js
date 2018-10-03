import {combineReducers} from 'redux'
import {LocaleReducer} from './LocaleReducer'


const rootReducer = combineReducers({
    locale: LocaleReducer,
})

export default rootReducer
