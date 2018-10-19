import React, {Component} from 'react'
import SearchCoursesBanner from './SearchCourseBanner'
import CourseList from './CourseLists'
import './index.scss'

class SearchCourses extends Component {
    
    render() {
        return (
            <div className="search-course-section">
                <section>
                    <SearchCoursesBanner />
                </section>
                <section>
                    <CourseList />
                </section>
            </div>
        )
    }
}

export default SearchCourses
