import React, {Component} from 'react'
import {BrowserRouter as Router, Switch, Route, Redirect} from 'react-router-dom'
import {IntlProvider} from 'react-intl'
import {connect} from 'react-redux'
import {Container} from 'reactstrap'
import Home from './components/home'
import SearchCourses from './components/search_courses'
import CourseInfo from './components/course_info'
import PropTypes from 'prop-types'
import Header from './components/layout/header'
import MenuBar from './components/layout/navbar'
import Footer from './components/layout/footer'
import fiMessages from './intl/translations/fi.json'
import enMessages from './intl/translations/en.json'
import svMessages from './intl/translations/sv.json'
import ScrollToTop from './common/util/ScrollToTop'


const translations = {
    'fi': fiMessages,
    'en': enMessages,
    'sv': svMessages,
}

class App extends Component {
    render() {
        const {lang} = this.props
        return (
            <IntlProvider locale={lang} messages={translations[lang]} >
                <Router>
                    <ScrollToTop>
                        <Container fluid>
                            <Header />
                            <MenuBar />
                            <Switch>
                                <Route exact path="/" component={Home} />
                                <Route exact path="/search-courses" component={SearchCourses} />
                                <Route exact path="/course-info/:id" component={CourseInfo} />
                                <Redirect to={{pathname:'/'}} />
                            </Switch>
                            <Footer />
                        </Container>
                    </ScrollToTop>
                </Router>
            </IntlProvider>
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
