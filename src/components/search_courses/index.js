import React, {Component} from 'react'
import SearchCoursesBanner from './SearchCourseBanner'
import CourseList from './CourseLists'
import {connect} from 'react-redux'
import {getAllCourses} from '../../actions'
import PropTypes from 'prop-types'
import './index.scss'

class SearchCourses extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
        }
    }

    UNSAFE_componentWillMount(){
        this.props.getAllCourses();
    }

    getSearchInput = (inputValue)=>{
        this.setState({
            inputValue,
        })
    }
    
    render() {
        const {inputValue} = this.state
        const {allCourses} = this.props
        const searchedCourses = allCourses.filter(course=>(course.name['fi'] || course.name['en']).toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
        return (
            <div className="search-course-section">
                <section>
                    <SearchCoursesBanner getSearchInput = {this.getSearchInput} />
                </section>
                <section>
                    <CourseList searchedCourses={searchedCourses} />
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
