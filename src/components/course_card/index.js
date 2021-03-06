import React, {Component} from 'react'
import {Row, Col, Button, 
    Card, CardImg, CardText, CardBody, CardSubtitle} from 'reactstrap'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
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
        noOfItems < this.props.data.length ? (
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
        const {data} = this.props;
        const courses = data.slice(0, this.state.itemsToShow).map(course=>(
            <Col xs="12" sm="4"  key={course.id} className="card-item">
                <Card>
                    <Link to={`/course-info/${course.id}`}>
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
                            <CardText title={course.name['fi']}>{course.name['fi'].length < 30 ? course.name['fi'] : course.name['fi'].substring(0, 30) + '...'}</CardText>
                            <CardText className="date">{moment(course.start_time).locale(this.props.lang).format('l')} - {moment(course.end_time).locale(this.props.lang).format('l')}</CardText>     
                        </CardBody>
                    </Link>
                </Card>
            </Col>
        ));
        return (
            <div className="language-course-row">
                <Row className="language-course-container"> 
                    {courses}
                </Row>
                <div className="front-button">              
                    <Button
                        outline
                        onClick={this.showMore}
                        color="primary" 
                    >
                        {this.state.itemsToShow >= this.props.data.length ? 'Show Less' : 'Lisää kielikursseja'}
                    </Button>
                </div>
            </div>
        )
    }
}

LanguageCourse.propTypes = {
    lang: PropTypes.string.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
    }
}


export default connect(mapStateToProps)(LanguageCourse)
