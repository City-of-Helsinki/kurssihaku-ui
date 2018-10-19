import React, {Component} from 'react'
import {Row, Col, Media} from 'reactstrap'
import {searchedCourses} from '../../MOCKS'

export class CourseLists extends Component {

    render() {
        const courses = searchedCourses.map((course, i)=>(
            <Media key={i}>
                <Media left href="#">
                    <Media object src="https://placeholdit.imgix.net/~text?txtsize=15&txt=150x150&w=150&h=150" alt="Generic placeholder image" />
                </Media>
                <Media body>
                    <Media heading>
                        {course.title}
                    </Media>
                    <h3>{course.heading}</h3>
                    <span>{course.date}</span>
                    <p>{course.text}</p>
                </Media>
            </Media>
        ))
        return (
            <Row>
                <Col xs="12">
                    <div className="media-container">
                        {courses}
                    </div>                    
                </Col>
            </Row>
        )
    }
}

export default CourseLists
