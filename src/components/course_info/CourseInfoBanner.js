import React, {Component} from 'react'
import {Row, Col, Jumbotron} from 'reactstrap'
import image from '../../assets/images/home-bg.jpg'

export class CourseInfoBanner extends Component {
    render() {
        return (
            <Row>
                <Col xs="12">
                    <Jumbotron>
                        <div class="test">
                            <h5>Jätkäsaaren Guassi</h5>
                            <h2>Katuakvarellin jatko-kurssi edistyneille maalareille</h2>
                        </div>
                        <img src={image} alt=""/>
                      
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

export default CourseInfoBanner
