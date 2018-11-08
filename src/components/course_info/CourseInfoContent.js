import React, {Component, Fragment} from 'react'
import {Row, Col, Button} from 'reactstrap'
import {ReactComponent  as Calendar} from 'hel-icons/dist/shapes/calendar.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobeAmericas, faPencilAlt, faUsers,faCircle, faTimes} from '@fortawesome/free-solid-svg-icons'
import {faBuilding, faMoneyBillAlt} from '@fortawesome/free-regular-svg-icons'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/sv'

export class CourseInfoContent extends Component {
    constructor(props){
        super(props)
        this.state = {
            course: {},
            lang: '',
            isOpen: false,
        }

    }
    componentWillReceiveProps(nextProps) {
        this.setState({course: nextProps.course, lang: nextProps.lang});          
    }
    openTimeInfo = ()=>{
        this.setState({
            isOpen: true,
        })
    }

    closeTimeInfo = ()=>{
        this.setState({
            isOpen: false,
        })
    }

    render() {
        const {course, lang} = this.state
        return (
            <Row>
                <Col xs="6">
                    <div className="course-info-left-content">
                        <h3><Calendar className="calendar-icon" />{moment(course.start_time).locale(lang).format('l')} - {moment(course.end_time).locale(lang).format('l')}</h3>
                        <h5>Yhteensä 7 kertaa <span style={{textDecoration: 'underline', cursor: 'pointer'}} onClick={this.openTimeInfo} role="button">(näytä kerrat)</span></h5>
                        { this.state.isOpen ?
                            <div className="course-time-info-container">
                                <FontAwesomeIcon icon={faTimes} className="cross" size='3x' onClick={this.closeTimeInfo} style={{cursor: 'pointer'}} />
                                <div className="course-time-info">
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                    <p>Ma 11.06.2018 17.00-19.45</p>
                                </div>
                            </div> : '' }
                        <h5>
                            {course.short_description && (course.short_description['en'] || course.short_description['fi'])}
                        </h5>
                        <p>
                            {course.description && (course.description['fi'] || course.description['en'])}
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
                        <div className="info-container">
                            <FontAwesomeIcon icon={faBuilding} />
                            <div>
                                <h5>Järjestäjä:</h5>
                                <p>{course.publisher}</p>
                            </div>
                        </div>                   
                        
                        <div className="info-container">
                            <FontAwesomeIcon icon={faGlobeAmericas} />
                            <div>
                                <h5>Verkosivut:</h5>
                                <p className="link">www.guassi.fi/cityacquarelle</p>

                            </div>
                        </div>
                        <div className="info-container">
                            <FontAwesomeIcon icon={faMoneyBillAlt} />
                            <div className="hinta">
                                <h5>Hinta:</h5>
                                <p>200,00€ (Ulkopuolisille)</p>
                                <p>30,00€ (Guassin jäsenille)</p>

                            </div>
                        </div>
                    </div>
                    <div className="course-info-right-content">     
                        <div className="info-container">
                            <FontAwesomeIcon icon={faPencilAlt} />
                            <div>
                                <h5>Ilmoittautuminen:</h5>
                                <p>{course.extension_course && 
                                    moment(course.extension_course.enrolment_start_time).locale(lang).format('l')} - 
                                {course.extension_course && moment(course.extension_course.enrolment_end_time).locale(lang).format('l')}
                                </p>
                            </div>
                        </div>                   
                        
                        <div className="info-container">
                            <FontAwesomeIcon icon={faUsers} />
                            <div>
                                <h5>Paikkoja yhteensä: {course.extension_course && course.extension_course.maximum_attendee_capacity}</h5>
                            </div>
                        </div>
                        <div className="info-container">
                            <Button>Ilmoittaudu kurssille</Button>
                        </div>
                        <div className="info-container">
                            {course.extension_course && course.extension_course.remaining_attendee_capacity > 5 ?
                                <Fragment>
                                    <FontAwesomeIcon icon={faCircle} className="circleGreen" />
                                    <div>
                                        <h5>Kurssilla on vapaita paikkoja</h5>
                                    </div>
                                </Fragment> :
                                <Fragment>
                                    <FontAwesomeIcon icon={faCircle} className="circleYellow" />
                                    <div>
                                        <h5>vähän paikkoja jäljellä </h5>
                                    </div>
                                </Fragment>
                            }
                        </div>   
                    </div>
                </Col>
            </Row>
        )
    }
}


export default CourseInfoContent
