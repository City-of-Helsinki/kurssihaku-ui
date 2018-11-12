import React, {Component} from 'react'
import SearchCoursesBanner from './SearchCourseBanner'
import CourseList from './CourseLists'
import {connect} from 'react-redux'
import {getAllCourses, getCoursesKeyword} from '../../actions'
import PropTypes from 'prop-types'
import './index.scss'

class SearchCourses extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            publisherSelectedValue: '',
        }
    }

    UNSAFE_componentWillMount(){
        this.props.getAllCourses()
        this.props.getCoursesKeyword()
    }

    getSearchInput = (inputValue)=>{
        this.setState({
            inputValue,
        })
    }

    getPublisherInput = (publisherSelectedValue)=>{
        this.setState({
            publisherSelectedValue,
        })
    }
    
    render() {
        //const inputSearchCourse = this.props.location.state.inputSearchCourse
        const {inputValue, publisherSelectedValue} = this.state
        const {lang, allCourses, allCoursesKeyword} = this.props
        //search course by user input 
        const searchByInput = allCourses.filter(course=>(course.name['fi'] || course.name['en']).toLowerCase().indexOf(inputValue.toLowerCase()) !== -1)
        //search course by select publisher value
            .filter(course=>course.publisher.indexOf(publisherSelectedValue) !== -1)
        return (
            <div className="search-course-section">
                <section>
                    <SearchCoursesBanner 
                        lang={lang}
                        getSearchInput = {this.getSearchInput} 
                        getPublisherInput = {this.getPublisherInput}
                        allCourses={allCourses}
                        allCoursesKeyword={allCoursesKeyword} />
                </section>
                <section>
                    <CourseList searchByInput={searchByInput} />
                </section>
            </div>
        )
    }
}

SearchCourses.propTypes = {
    // lang: PropTypes.String.isRequired,
    getAllCourses: PropTypes.func.isRequired,
    allCourses: PropTypes.array.isRequired,
    allCoursesKeyword: PropTypes.array.isRequired,

}

const mapStateToProps = state =>{
    return {
        lang: state.locale.lang,
        allCourses: state.courses.allCourses,
        allCoursesKeyword: state.courses.allCoursesKeyword,
    }
}

export default connect(mapStateToProps, {getAllCourses, getCoursesKeyword})(SearchCourses)
