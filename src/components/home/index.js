import React, {Component} from 'react'
import {Row, Col, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap'
import {ReactComponent  as SearchIcon} from 'hel-icons/dist/shapes/search.svg'
import sportIcon from '../../assets/icons/icon-sport@2x.png'
import langIcon from '../../assets/icons/icon-lang@2x.png'
import artIcon from '../../assets/icons/icon-art@2x.png'
import techIcon from '../../assets/icons/icon-tech@2x.png'
import LanguageCourse from './LanguageCourse'
import Othercourse from './OtherCourse'
import './index.scss'
import {getAllCourses} from '../../actions';
import {connect} from 'react-redux';

class FrontPage extends Component {

    UNSAFE_componentWillMount(){
        this.props.getAllCourses();
    }
    
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
                    <LanguageCourse />
                </section>
                <section>
                    <Othercourse />
                </section>
            </div>            
        )
    }
}


export default connect(null, {getAllCourses})(FrontPage)
