import React, {Component} from 'react'
import {Row, Col, Card, CardImg, CardBody, CardSubtitle, CardText} from 'reactstrap'

export class CourseInfoInterestCourse extends Component {
    render() {
        return (
            <div className="interest-course-row">
                <div className="interest-course-container">
                    <h2>Sinua saattaa kiinnostaa myös</h2>
                </div>
                <Row className="interest-course-container">
                    <Col xs="12" sm="4" className="card-item">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt="Card image cap" />
                            <CardBody>
                                <CardSubtitle>title</CardSubtitle>
                                <CardText>course.content</CardText>
                                <CardText className="date">course.startDate - course.endDate</CardText>     
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="4" className="card-item">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt="Card image cap" />
                            <CardBody>
                                <CardSubtitle>title</CardSubtitle>
                                <CardText>course.content</CardText>
                                <CardText className="date">course.startDate - course.endDate</CardText>     
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xs="12" sm="4" className="card-item">
                        <Card>
                            <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt="Card image cap" />
                            <CardBody>
                                <CardSubtitle>title</CardSubtitle>
                                <CardText>course.content</CardText>
                                <CardText className="date">course.startDate - course.endDate</CardText>     
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        )
    }
}

export default CourseInfoInterestCourse
