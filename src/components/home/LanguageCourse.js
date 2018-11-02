import React, {Component} from 'react'
import {Row, Col, Button, 
    Card, CardImg, CardText, CardBody, CardSubtitle} from 'reactstrap'
import {connect} from 'react-redux'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment/locale/fi'
import 'moment/locale/sv'


class LanguageCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemsToShow: 3,
            defaultImage: 'https://placeholdit.imgix.net/~text?txtsize=33&txt=image&w=318&h=200',
        }
    }

    showMore = () => {
        let addItem = 3 
        const noOfItems = this.state.itemsToShow
        noOfItems < this.props.allCourses.length ? (
            this.setState({
                itemsToShow: noOfItems + addItem,
            })
        ) : (
            this.setState({
                itemsToShow: 3,
            })
        )                 
    }
    render() {
        const {allCourses} = this.props
        const courses = allCourses.slice(0, this.state.itemsToShow).map(course=>(
            <Col xs="12" sm="4"  key={course.id} className="card-item">
                <Card>
                    {course.images.length > 0 ? course.images.map(image=>(
                        <CardImg top width="100%" 
                            src={image.url}
                            key={image.id}
                            alt="Card image cap" />
                    )) : <CardImg top width="100%" 
                        src={this.state.defaultImage}
                        alt="Card image cap" />}
                   
                    <CardBody>
                        <CardSubtitle>{course.publisher}</CardSubtitle>
                        <CardText title={course.name['fi']}>{course.name['fi'].slice(0, 30) + '...'}</CardText>
                        <CardText className="date">{moment(course.start_time).locale(this.props.lang).format('l')} - {moment(course.end_time).locale(this.props.lang).format('l')}</CardText>     
                    </CardBody>
                </Card>
            </Col>
        ))
        return (
            <div className="language-course-row">
                <h2>Taidekursseja</h2>
                <Row className="language-course-container"> 
                    {courses}
                </Row>
                <div className="front-button">
                        
                    <Button
                        outline
                        onClick={this.showMore} 
                        color="primary">
                        {this.state.itemsToShow >= this.props.allCourses.length ? 'Show Less' : 'Lisää kielikursseja'}
                    </Button>
                </div>
            </div>
        )
    }
}

LanguageCourse.propTypes = {
    allCourses: PropTypes.array.isRequired,
}

const mapStateToProps = state =>{
    return{
        allCourses: state.courses.allCourses,
        lang: state.locale.lang,
    }
}


export default connect(mapStateToProps)(LanguageCourse)
