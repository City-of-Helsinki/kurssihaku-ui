import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home'
import {IntlProvider} from 'react-intl'
import {connect} from 'react-redux'
import PropTypes from 'prop-types';
import messages from './intl/messages'
import './assets/main.scss'

class App extends Component {
    render() {
        const {lang} = this.props
        return (
            <Router>
                <IntlProvider locale={lang} messages={messages[lang]} >
                    <div>
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                    </div>
                </IntlProvider>
            </Router>
        )
    }
}

App.propTypes = {
    lang: PropTypes.string.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
    }
}

export default connect(mapStateToProps)(App);
