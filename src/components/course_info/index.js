import React, {Component} from 'react'
import {CourseInfoBanner} from './CourseInfoBanner';
import {CourseInfoContent} from './CourseInfoContent';
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
            </div>
        )
    }
}

export default CourseInfo
