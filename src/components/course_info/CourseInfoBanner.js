import React, {Component} from 'react'
import {Row, Col, Jumbotron} from 'reactstrap'
import image from '../../assets/images/home-bg.jpg'

export class CourseInfoBanner extends Component {
    render() {
        
        const {course} = this.props;
        return (
            <Row>
                <Col xs="12" className="banner-col">
                    <Jumbotron>
                        {course && 
                        <div className="title">
                            <h5>{course.publisher}</h5>
                            <h2>{course.name['fi']}</h2>                        
                        </div> 
                        }
                        {course && course.images.length > 0 ? <img src={course.images[0].url} alt="" /> : <img src={image} alt="" />}
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

export default CourseInfoBanner
