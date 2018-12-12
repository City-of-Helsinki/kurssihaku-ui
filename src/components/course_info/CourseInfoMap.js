import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import InfoMap from './InfoMap'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faMapMarkerAlt} from '@fortawesome/free-solid-svg-icons'

export class CourseInfoMap extends Component {
    render() {
        const {course} = this.props;
        console.log(course)
        return (
            <Row className="map-section">
                <Col xs="12" md="4">
                    <div className="map-container">
                        {/* lat lng need to be replaced, below lat lng is just for demo */}
                        <InfoMap lat={60.17989} lng={24.9504} />
                    </div>
                </Col>
                <Col xs="12" md="8">
                    <div className="address-container">
                        <div className="address">
                            <p><FontAwesomeIcon icon={faMapMarkerAlt} />{' '}Paikka:</p>
                            <p>Name</p>
                            <p>Street Address</p>
                            <p>Postal Address</p>
                        </div>
                    </div>
                </Col>
            </Row>
        )
    }
}

export default CourseInfoMap
