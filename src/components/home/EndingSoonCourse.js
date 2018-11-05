import React, {Component} from 'react'
import {Row} from 'reactstrap'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/sv'
import EndingCourse from '../course_card'

class EndingSoonCourse extends Component {
    render() {
        return  (
            <div className="language-course-row"> {(this.props.endingCourses.length > 0) ?
                <div><h2>Vielä ehdit</h2>
                    <Row className="language-course-container"> 
                        <EndingCourse data={this.props.endingCourses} />
                    </Row>
                    {/* <div className="front-button">                        
                        <Button
                            outline
                            onClick={this.showMore} 
                            color="primary">
                            {this.props.itemsToShow >= this.props.endingCourses.length ? 'Show Less' : 'Lisää viime hetken vaihtoehtoja'}
                        </Button>
                    </div> */}
                </div> : '' }
            </div>
        ) 
    }
}

EndingSoonCourse.propTypes = {
    lang: PropTypes.string.isRequired,
    endingCourses: PropTypes.array.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
        endingCourses: state.courses.allCourses.filter(course=>{
            const currentDate = new Date();
            const endDate = new Date(moment(course.extension_course.enrolment_end_time).format('l'));
            const timeDiff = Math.abs(endDate.getTime() - currentDate.getTime());
            const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
            if(daysDiff <= 7){
                return true
            } else{
                return false
            }
        }),

    }
}

export default connect(mapStateToProps)(EndingSoonCourse)
