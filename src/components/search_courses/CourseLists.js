import React, {Component} from 'react'
import {Row, Col, Media} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/sv'

export class CourseLists extends Component {
    

    render() {
        const {allCourses} = this.props
        
        const courses = allCourses.map(course=>(
            <Media key={course.id}>
                <Media left href="#">
                    {course.images.length > 0 ? course.images.map(image=>(
                        <Media object
                            key={image.id} 
                            src={image.url} />

                    )) : <Media object
                        src='https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=318&h=200' />}
                </Media>
                <Media body>
                    <Media heading>
                        {course.publisher}
                    </Media>
                    <h3>{course.name['fi'] || course.name['en']}</h3>
                    <span>{moment(course.start_time).locale(this.props.lang).format('l')} - {moment(course.end_time).locale(this.props.lang).format('l')}</span>
                    <p>{course.name['fi']}</p>
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

CourseLists.propTypes = {
    lang: PropTypes.string.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
    }
}

export default connect(mapStateToProps)(CourseLists)
