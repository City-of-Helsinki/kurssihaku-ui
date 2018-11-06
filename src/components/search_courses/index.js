import React, {Component} from 'react'
import SearchCoursesBanner from './SearchCourseBanner'
import CourseList from './CourseLists'
import {connect} from 'react-redux'
import {getAllCourses} from '../../actions'
import PropTypes from 'prop-types'
import './index.scss'

class SearchCourses extends Component {

    UNSAFE_componentWillMount(){
        this.props.getAllCourses();
    }
    
    render() {
        const {allCourses} = this.props       
        return (
            <div className="search-course-section">
                <section>
                    <SearchCoursesBanner allCourses={allCourses} />
                </section>
                <section>
                    <CourseList allCourses={allCourses} />
                </section>
            </div>
        )
    }
}

SearchCourses.propTypes = {
    getAllCourses: PropTypes.func.isRequired,
    allCourses: PropTypes.array.isRequired,

}

const mapStateToProps = state =>{
    return {
        allCourses: state.courses.allCourses,
    }
}

export default connect(mapStateToProps, {getAllCourses})(SearchCourses)
