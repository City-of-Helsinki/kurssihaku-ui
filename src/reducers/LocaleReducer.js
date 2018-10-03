import {LOCALE_SET} from '../constants/constants'

export const LocaleReducer = (state = {lang: 'en'}, action)=>{
    switch(action.type){
        case LOCALE_SET:
            return {
                lang: action.lang,
            }
        default:
            return state;
    }
}
