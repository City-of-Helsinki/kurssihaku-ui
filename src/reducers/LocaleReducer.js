import {LOCALE_SET} from '../constants/constants'
import {getMessages} from '../intl/getMessages'

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
                messages: getMessages(action.lang),
            }
        default:
            return state;
    }
}
