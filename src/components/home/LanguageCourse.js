import React, {Component} from 'react'
import {Row} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import LanguageCourseComponent from '../course_card'
import Loader from '../../common/loader/Loader'

class LanguageCourse extends Component {
    
    render() {
        return (
            <div className="language-course-row">
                <div className="language-course-content">
                    <h2>Taidekursseja</h2>
                    {this.props.loading ? <Loader /> : 
                        <Row className="language-course-container"> 
                            <LanguageCourseComponent data = {this.props.languageCourses} />
                        </Row> }
                </div>
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
        loading: state.courses.allCoursesLoading,
    }
}


export default connect(mapStateToProps)(LanguageCourse)
