import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import {createStore, applyMiddleware, compose} from 'redux'
import {addLocaleData} from 'react-intl'
import {localeSet} from './actions'
import fi from 'react-intl/locale-data/fi'
import en from 'react-intl/locale-data/en'
import sv from 'react-intl/locale-data/sv'
import thunk from 'redux-thunk'

addLocaleData([...en, ...fi, ...sv])

const store = createStore(
    rootReducer,
    compose(applyMiddleware(thunk))
)

if(localStorage.allLang){
    store.dispatch(localeSet(localStorage.allLang))
}

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
