import React, {Component} from 'react'
import {Row, Col, Button} from 'reactstrap'
import {ReactComponent  as Calendar} from 'hel-icons/dist/shapes/calendar.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faGlobeAmericas, faPencilAlt, faUsers,faCircle} from '@fortawesome/free-solid-svg-icons'
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
        }

    }
    componentWillReceiveProps(nextProps) {
        this.setState({course: nextProps.course, lang: nextProps.lang});          
    }

    render() {
        const {course, lang} = this.state
        if(course.description){

            console.log(course.description.fi)
        }
        return (
            <Row>
                <Col xs="6">
                    <div className="course-info-left-content">
                        <h3><Calendar className="calendar-icon" />{moment(course.start_time).locale(lang).format('l')} - {moment(course.end_time).locale(lang).format('l')}</h3>
                        <h5>Yhteensä 7 kertaa (näytä kerrat)</h5>
                        <h5>
                            {course.short_description ? course.short_description['en'] || course.short_description['fi']  : ''}
                        </h5>
                        <p>
                            {course.description ? course.description['fi'] || course.description['en']  : ''}
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
                                <p>3.3.2018 - 10.6.2018</p>
                            </div>
                        </div>                   
                        
                        <div className="info-container">
                            <FontAwesomeIcon icon={faUsers} />
                            <div>
                                <h5>Paikkoja yhteensä: 20:</h5>
                            </div>
                        </div>
                        <div className="info-container">
                            <Button>Ilmoittaudu kurssille</Button>
                        </div>
                        <div className="info-container">
                            <FontAwesomeIcon icon={faCircle} className="circle" />
                            <div>
                                <h5>Kurssilla on vapaita paikkoja:</h5>
                            </div>
                        </div>   
                    </div>
                </Col>
            </Row>
        )
    }
}


export default CourseInfoContent
