import React, {Component} from 'react'
import {Row} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LanguageCourseComponent from '../course_card'

class LanguageCourse extends Component {
    
    render() {
        return (
            <div className="language-course-row">
                <h2>Taidekursseja</h2>
                <Row className="language-course-container"> 
                    <LanguageCourseComponent data = {this.props.languageCourses} />
                </Row>
            </div>
        )
    }
}

LanguageCourse.propTypes = {
    lang: PropTypes.string.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
    }
}


export default connect(mapStateToProps)(LanguageCourse)
