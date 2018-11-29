import React, {Component} from 'react'
import {Row, Col, Card, CardImg, CardBody, CardSubtitle, CardText} from 'reactstrap'
import {Link} from 'react-router-dom'
import moment from 'moment'
import _ from 'lodash'

export class CourseInfoInterestCourse extends Component {
    render() {
        const {allCourses, course} = this.props
        
        const relatedCourse = allCourses.filter(item => item.publisher === course.publisher)
        const interestCourse = _.shuffle(relatedCourse).slice(0, 3).map(course => (
            <Col xs="12" sm="4"  key={course.id} className="card-item">
                <Card>
                    <Link to={`/course-info/${course.id}`}>
                        {course.images.length > 0 ? course.images.map(image=>(
                            <CardImg top width="100%" 
                                src={image.url}
                                key={image.id}
                                alt="Card image cap" />
                        )) : <CardImg top width="100%" 
                            src="https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=318&h=200"
                            alt="Card image cap" />}
                   
                        <CardBody>
                            <CardSubtitle>{course.publisher}</CardSubtitle>
                            <CardText>{course.name['en'] || course.name['fi']}</CardText>
                            <CardText className="date">{moment(course && course.start_time).locale(this.props.lang).format('l')} - {moment(course && course.end_time).locale(this.props.lang).format('l')}</CardText>     
                        </CardBody>
                    </Link>
                </Card>
            </Col>
        ))
        return (
            <div className="interest-course-row">
                <div className="interest-course-container">
                    <h2>Sinua saattaa kiinnostaa myös</h2>
                </div>
                <Row className="interest-course-container">
                    {interestCourse}
                </Row>
            </div>
        )
    }
}

export default CourseInfoInterestCourse
