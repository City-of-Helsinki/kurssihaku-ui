import React, {Component} from 'react'
import {Row, Col} from 'reactstrap' 
import {ReactComponent  as Calendar} from 'hel-icons/dist/shapes/calendar.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobeAmericas} from '@fortawesome/free-solid-svg-icons'


export class CourseInfoContent extends Component {
    render() {
        return (
            <Row>
                <Col xs="6">
                    <div className="course-info-left-content">
                        <h3><Calendar className="calendar-icon" />14.6 - 26.7.2018</h3>
                        <h5>Yhteensä 7 kertaa (näytä kerrat)</h5>
                        <h5>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </h5>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                        </p>
                        <p className="hash-tag">
                            #taide #maalaus #kaupunkikulttuuri #akvarelli
                        </p>
                        <p>
                            <FontAwesomeIcon icon={faGlobeAmericas} className="globe" />
                            <span className="kielet-text">Kielet:</span><span className="language-text">suomi, englanti</span>
                        </p>
                    </div>
                </Col>
                <Col xs="6">
                    <div className="course-info-right-content">

                    </div>
                </Col>
            </Row>
        )
    }
}

export default CourseInfoContent
