import React, {Component} from 'react'
import {languageCourses} from '../../MOCKS'
import {Row, Col, Button,
    Card, CardImg, CardText, CardBody, CardSubtitle} from 'reactstrap'


class LanguageCourse extends Component {
    constructor(props){
        super(props);
        this.state = {
            itemsToShow: 3,
            expanded: false,
        }
    }

    showMore = () => {
        this.state.itemsToShow < languageCourses.length ? (
            this.setState({
                itemsToShow: this.state.itemsToShow + 3,
                expanded: true,
            })
        ) : (
            this.setState({itemsToShow: 3, expanded: false})
        )                 
    }
    render() {
        const courses = languageCourses.slice(0, this.state.itemsToShow).map((course, i)=>(
            <Col xs="4" key={i} className="card-item">
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97200&w=318&h=200" alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{course.title}</CardSubtitle>
                        <CardText>course.content</CardText>
                        <CardText className="date">course.startDate - course.endDate</CardText>     
                    </CardBody>
                </Card>
            </Col>
        ))
        return (
            <div>
                <h2>Kielikursseja</h2>
                <Row className="language-course-container"> 
                    {courses}
                </Row>
                <div className="front-button">
                        
                    <Button
                        outline
                        onClick={this.showMore} 
                        color="primary">
                        {this.state.itemsToShow === languageCourses.length ? 'Show Less' : 'Lisää kielikursseja'}
                    </Button>
                </div>
            </div>
        )
    }
}

export default LanguageCourse