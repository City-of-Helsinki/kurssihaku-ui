import React, {Component} from 'react'
import SearchCoursesBanner from './SearchCourseBanner'
import CourseList from './CourseLists'
import {connect} from 'react-redux'
import {getAllCourses, getCoursesKeyword} from '../../actions'
import PropTypes from 'prop-types'
import Loader from '../../common/loader/Loader'
import './index.scss'

class SearchCourses extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputValue: '',
            publisherSelectedValue: '',
            courseTopicId: '',
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

    getCourseTopicId = (courseTopicId)=>{
        this.setState({
            courseTopicId,
        })
    }
    
    render() {
        const homeInputText = this.props.location.query
        const {inputValue, publisherSelectedValue, courseTopicId} = this.state
        const {lang, allCourses, allCoursesKeyword, loading} = this.props
        
        let searchByInput;
        if(loading){
            return <Loader />
        } else{ 
            //search course by user input 
            searchByInput = allCourses        
                .filter(course=>(course.name['fi'] || course.name['en']).toLowerCase().includes(inputValue.toLowerCase()))
            //search course by select publisher value
                .filter(course=>course.publisher.includes(publisherSelectedValue))
            //search course by topic
                .filter(course => course.keywords.some(item=> !courseTopicId || item['@id'].includes(`https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/keyword/${courseTopicId}/`)))
        }
        return (
            <div className="search-course-section">
                <section>
                    <SearchCoursesBanner 
                        lang={lang}
                        getSearchInput = {this.getSearchInput} 
                        getPublisherInput = {this.getPublisherInput}
                        getCourseTopicId = {this.getCourseTopicId}
                        allCourses={allCourses}
                        homeInputText={homeInputText}
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
    lang: PropTypes.string.isRequired,
    getAllCourses: PropTypes.func.isRequired,
    allCourses: PropTypes.array.isRequired,
    allCoursesKeyword: PropTypes.array.isRequired,

}

const mapStateToProps = state =>{
    return {
        lang: state.locale.lang,
        allCourses: state.courses.allCourses,
        loading: state.courses.allCoursesLoading,
        allCoursesKeyword: state.courseKeyword.allCoursesKeyword,
    }
}

export default connect(mapStateToProps, {getAllCourses, getCoursesKeyword})(SearchCourses)
