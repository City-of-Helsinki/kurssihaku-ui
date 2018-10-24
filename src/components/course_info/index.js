import React, {Component} from 'react'
import {CourseInfoBanner} from './CourseInfoBanner';
import {CourseInfoContent} from './CourseInfoContent';
import {CourseInfoMap} from './CourseInfoMap';
import {CourseInfoPic} from './CourseInfoPic';
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
            </div>
        )
    }
}

export default CourseInfo
