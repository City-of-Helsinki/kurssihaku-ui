import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/home'
import {IntlProvider} from 'react-intl'
import {connect} from 'react-redux'
import {Container} from 'reactstrap'
import PropTypes from 'prop-types';
import messages from './intl/messages'
import Header from './components/layout/header'
import MenuBar from './components/layout/navbar';
import './assets/main.scss'

class App extends Component {
    render() {
        const {lang} = this.props
        return (
            <Router>
                <IntlProvider locale={lang} messages={messages[lang]} >
                    <Container fluid>
                        <Header />
                        <MenuBar />
                        <Switch>
                            <Route path="/" exact component={Home} />
                        </Switch>
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
