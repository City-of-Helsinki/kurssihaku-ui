import React, {Component} from 'react'
import {Row, Col, Input, InputGroup, InputGroupAddon, Button,
    Card, CardImg, CardText, CardBody, CardSubtitle} from 'reactstrap'
import {ReactComponent  as SearchIcon} from 'hel-icons/dist/shapes/search.svg'
import sportIcon from '../../assets/icons/icon-sport@2x.png'
import langIcon from '../../assets/icons/icon-lang@2x.png'
import artIcon from '../../assets/icons/icon-art@2x.png'
import techIcon from '../../assets/icons/icon-tech@2x.png'
import {languageCourses} from '../../MOCKS'
import './index.scss'

class FrontPage extends Component {
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
            <Col xs="4" key={i}>
                <Card>
                    <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                    <CardBody>
                        <CardSubtitle>{course.title}</CardSubtitle>
                        <CardText>course.content</CardText>
                        <CardText>course.startDate</CardText>
                        <CardText>course.endDate</CardText>                                        
                    </CardBody>
                </Card>
            </Col>
        ))
        return (
            <div className="front-page">
                <section>
                    <Row>
                        <Col xs="12">
                            <div className="front-banner">
                                <div className="banner-content">
                                    <h1>Kurssihaku</h1>
                                    <p>Opi uutta ja verestä vanhoja taitoja ja tietoja. Tutustu helsinkiläiseen kurssitarjontaan.</p>
                                    <InputGroup>
                                        <InputGroupAddon addonType="prepend"><SearchIcon className="search-icon" /></InputGroupAddon>
                                        <Input type="text" placeholder="Hae kursseja"/>
                                    </InputGroup>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <Row>
                        <Col xs="12">
                            <div className="icon-container test">
                                <div className="front-icons">
                                    <figure>
                                        <img src={sportIcon} alt="sport" />
                                        <figcaption>LIIKUNTAA</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={langIcon} alt="language" />
                                        <figcaption>KIELIÄ</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={artIcon} alt="art" />
                                        <figcaption>TAIDETTA</figcaption>
                                    </figure>
                                    <figure>
                                        <img src={techIcon} alt="tech" />
                                        <figcaption>TEKNIKKAA</figcaption>
                                    </figure>
                                </div>
                                <div className="front-button">
                                    <Button outline color="light">                                        
                                        Ja paljon muuta
                                    </Button>
                                </div>
                            </div>
                            
                        </Col>
                    </Row>
                </section>
                <section>
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
                </section>
            </div>            
        )
    }
}


export default FrontPage
