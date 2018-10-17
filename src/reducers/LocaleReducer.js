import {LOCALE_SET} from '../constants/constants'


const defaultState = {
    lang: 'en',
    messages: {},
}

export const LocaleReducer = (state = defaultState, action)=>{
    switch(action.type){
        case LOCALE_SET:
            return {
                ...state,
                lang: action.lang,
            }
        default:
            return state;
    }
}
