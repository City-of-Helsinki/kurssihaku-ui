import React, {Component} from 'react'
import {Row, Col, Button, Input, InputGroup, InputGroupAddon} from 'reactstrap'
import {ReactComponent  as SearchIcon} from 'hel-icons/dist/shapes/search.svg'
import {getAllCourses} from '../../actions';
import {connect} from 'react-redux';
import {CourseIconComponent} from './CourseIconComponent';
import PropTypes from 'prop-types'
import sportIcon from '../../assets/icons/icon-sport@2x.png'
import langIcon from '../../assets/icons/icon-lang@2x.png'
import artIcon from '../../assets/icons/icon-art@2x.png'
import techIcon from '../../assets/icons/icon-tech@2x.png'
import LanguageCourse from './LanguageCourse'
import EndingSoonCourse from './EndingSoonCourse'
import './index.scss'

class FrontPage extends Component {
    constructor(props){
        super(props);
        this.state = {
            inputSearchCourse: '',
            error: null,
        }
    }

    UNSAFE_componentWillMount(){
        this.props.getAllCourses();
    }

    

    handleInputChange = (e)=>{
        this.setState({
            inputSearchCourse: e.target.value,
        })
    }

    handleInputSubmit = (e)=>{
        e.preventDefault()
        const searchCourseText = this.state.inputSearchCourse
        const searchedCourses = this.props.allCourses.filter(course=>(course.name['fi'] || course.name['en']).toLowerCase().indexOf(searchCourseText.toLowerCase()) !== -1)
        if(searchedCourses.length > 0){
            this.props.history.push({
                pathname: '/search-courses',
                query: this.state.inputSearchCourse,
            })
        } else{
            this.setState({
                error: 'No course Found',
            })
        }
    }   
    
    render() {
        const {languageCourses} = this.props;        
        return (
            <div className="front-page">
                <section>
                    <Row>
                        <Col xs="12">
                            <div className="front-banner">
                                <div className="banner-content">
                                    <h1>Kurssihaku</h1>
                                    <p>Opi uutta ja verestä vanhoja taitoja ja tietoja. Tutustu helsinkiläiseen kurssitarjontaan.</p>
                                    <form onSubmit={this.handleInputSubmit}>
                                        <InputGroup>
                                            <InputGroupAddon addonType="prepend"><SearchIcon className="search-icon" /></InputGroupAddon>
                                            <Input
                                                type="text"
                                                value={this.state.inputSearchCourse}
                                                onChange={this.handleInputChange} 
                                                placeholder="Hae kursseja"/>
                                        </InputGroup>
                                    </form>
                                    { this.state.error ? <span style={{color: 'white'}}>{this.state.error}</span> : '' }
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
                                    <CourseIconComponent
                                        src={sportIcon}
                                        caption="LIIKUNTAA"
                                    />
                                    <CourseIconComponent
                                        src={langIcon}
                                        caption="KIELIÄ"
                                    />
                                    <CourseIconComponent
                                        src={artIcon}
                                        caption="TAIDETTA"
                                    />
                                    <CourseIconComponent
                                        src={techIcon}
                                        caption="TEKNIKKAA"
                                    />
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
                    <LanguageCourse languageCourses={languageCourses} />
                </section>
                <section>
                    <EndingSoonCourse languageCourses={languageCourses} />
                </section>
            </div>            
        )
    }
}

FrontPage.propTypes = {
    getAllCourses: PropTypes.func.isRequired,
    languageCourses: PropTypes.array.isRequired,

}

const mapStateToProps = state =>{
    return{
        languageCourses: state.courses.allCourses.filter(item=> item.keywords.find(el=>el['@id'] === 'https://linkedcourses-api.test.hel.ninja/linkedcourses-test/v1/keyword/yso:p2739/')),
        allCourses: state.courses.allCourses,
    }
}


export default connect(mapStateToProps, {getAllCourses})(FrontPage)
