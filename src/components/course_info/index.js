import React, {Component} from 'react'
import {CourseInfoBanner} from './CourseInfoBanner';
import {CourseInfoContent} from './CourseInfoContent';
import {CourseInfoMap} from './CourseInfoMap';
import {CourseInfoPic} from './CourseInfoPic';
import {CourseInfoInterestCourse} from './CourseInfoInterestCourse';
import './index.scss'

export class CourseInfo extends Component {
    render() {
        return (
            <div className="course-info-section">
                <section>
                    <CourseInfoBanner />
                </section>
                <section>
                    <CourseInfoContent />
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

export default CourseInfo
