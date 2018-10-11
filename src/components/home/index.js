import React, {Component} from 'react'
import {Row, Col, Input, InputGroup, InputGroupAddon, Button,
    Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle} from 'reactstrap'
import {ReactComponent  as SearchIcon} from 'hel-icons/dist/shapes/search.svg'
import Koro from '../koroSection'
import sportIcon from '../../assets/icons/icon-sport@2x.png'
import langIcon from '../../assets/icons/icon-lang@2x.png'
import artIcon from '../../assets/icons/icon-art@2x.png'
import techIcon from '../../assets/icons/icon-tech@2x.png'
import './index.scss'

class FrontPage extends Component {
    render() {
        return (
            <div className="front-page">
                <section>
                    <Row>
                        <Col xs="12">
                            <div className="front-banner">
                                <div className="banner-content">
                                    <h1>Kurssihaku</h1>
                                    <p>Opi uutta ja verestä vanhoja taitoja ja tietoja. Tutustu helsinkiläiseen kurssitarjontaan.</p>
                                    {/* <SearchIcon className="search-icon" />
                                    <Input type="text" placeholder="Hae kursseja"/> */}
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
                            <div className="icon-container">
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
                                <div className="front-button"><Button outline color="light">Ja paljon muuta</Button></div>
                            </div>
                            
                        </Col>
                    </Row>
                </section>
                <section>
                    <h2>Kielikursseja</h2>
                    <Row className="language-course-container">                    
                        <Col xs="4">    
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4">  
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        
                                </CardBody>
                            </Card>
                        </Col>
                        <Col xs="4">  
                            <Card>
                                <CardImg top width="100%" src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180" alt="Card image cap" />
                                <CardBody>
                                    <CardSubtitle>Card subtitle</CardSubtitle>
                                    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                                        
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                    <div className="front-button"><Button outline color="primary">Lisää kielikursseja</Button></div>
                </section>
            </div>            
        )
    }
}


export default FrontPage
