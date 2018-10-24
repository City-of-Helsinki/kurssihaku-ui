import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'

export class CourseInfoPic extends Component {
    render() {
        return (
            <Row>
                <Col xs="12">
                    <div className="course-info-pic-container">
                        <h4>Jätkäsaaren Opisto</h4>
                        <div className="course-info-pic">
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt=""/>
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt=""/>
                            <img src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt=""/>
                        </div>
                    </div>
                    
                </Col>
            </Row>
        )
    }
}

export default CourseInfoPic
