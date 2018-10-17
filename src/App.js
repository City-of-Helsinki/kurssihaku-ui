import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './components/home'
import {IntlProvider} from 'react-intl'
import {connect} from 'react-redux'
import {Container} from 'reactstrap'
import PropTypes from 'prop-types'
import Header from './components/layout/header'
import MenuBar from './components/layout/navbar'
import Footer from './components/layout/footer'
import fiMessages from './intl/translations/fi.json'
import enMessages from './intl/translations/en.json'
import svMessages from './intl/translations/sv.json'
import './assets/main.scss'

const translations = {
    'fi': fiMessages,
    'en': enMessages,
    'sv': svMessages,
}

class App extends Component {
    render() {
        const {lang} = this.props
        return (
            <Router>
                <IntlProvider locale={lang} messages={translations[lang]} >
                    <Container fluid>
                        <Header />
                        <MenuBar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
                        <Footer />
                    </Container>
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
