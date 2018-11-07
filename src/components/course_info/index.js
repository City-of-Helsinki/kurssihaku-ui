import React, {Component} from 'react'
import {CourseInfoBanner} from './CourseInfoBanner';
import {CourseInfoContent} from './CourseInfoContent';
import {CourseInfoMap} from './CourseInfoMap';
import {CourseInfoPic} from './CourseInfoPic';
import {CourseInfoInterestCourse} from './CourseInfoInterestCourse';
import {connect} from 'react-redux'
import {getAllCourses} from '../../actions'
import './index.scss'

export class CourseInfo extends Component {
    UNSAFE_componentWillMount(){
        this.props.getAllCourses()
    }
    render() {
        const {allCourses} = this.props
        const courseId = this.props.match.params.id
        const course = allCourses.filter(course => course.id === courseId)[0]
        return (
            <div className="course-info-section">
                <section>
                    <CourseInfoBanner />
                </section>
                <section>
                    <CourseInfoContent course={course} lang={this.props.lang} />
                </section>
                <section>
                    <CourseInfoMap />
                </section>
                <section>
                    <CourseInfoPic />
                </section> 
                <section>
                    <CourseInfoInterestCourse />
                </section>
            </div>
        )
    }
}

const mapStateToProps = state =>{
    return{
        allCourses: state.courses.allCourses,
        lang: state.locale.lang,
    }
}

export default connect(mapStateToProps, {getAllCourses})(CourseInfo)
