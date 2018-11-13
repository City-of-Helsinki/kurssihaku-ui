import React, {Component} from 'react'
import {Row, Col, Label, Input, Jumbotron, FormGroup} from 'reactstrap'
import Select from 'react-select'
import PropTypes from 'prop-types'


export class SearchCourseBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            searchInput: '',
            selectedPublisherValue: null,
            selectedCourseTopic: null,
            selectPublisherValue: [],
            selectCourseTopic: [],
        }
    }
 
    componentWillReceiveProps(nextProps){
        const selectPublisherValue = nextProps.allCourses.map(course=> {return {label: course.publisher}})
        const uniqueselectPublisherValue = selectPublisherValue.filter((value, index, self)=>
            index === self.findIndex(t=>(
                t.label === value.label && t.label === value.label
            ))
        )
        const selectCourseKeyword = nextProps.allCoursesKeyword.map(keyword=>{return {id: keyword.id, label: keyword.name[nextProps.lang]}})
        const uniqueselectCourseTopic = selectCourseKeyword.filter((value, index, self)=>
            index === self.findIndex(t=>(
                t.label.toLowerCase() === value.label.toLowerCase() && t.label.toLowerCase() === value.label.toLowerCase()
            ))
        )
        this.setState({
            selectPublisherValue: uniqueselectPublisherValue,
            selectCourseTopic: uniqueselectCourseTopic,

        })    
    }

    handleSelectPublisher = (selectedOption) => {
        this.setState({selectedPublisherValue:selectedOption});
        this.props.getPublisherInput(selectedOption.label)
    }
    handleSearchInput = (e)=>{
        this.setState({
            searchInput: e.target.value,
        }, ()=>{
            this.props.getSearchInput(this.state.searchInput)
        }) 

    }
    handleSelectCourseTopic = (selectedOption)=>{
        this.setState({
            selectedCourseTopic: selectedOption,
        })
        this.props.getCourseTopicId(selectedOption.id)
    }
    render() {
        return (
            <Row>
                <Col xs="12">
                    <Jumbotron>
                        <h2>Selaa Kursseja</h2>
                        <div className="search-inputs">
                            <FormGroup>
                                <Label>Hakuteksti</Label>
                                <Input 
                                    type="text"
                                    value={this.state.searchInput}
                                    onChange={this.handleSearchInput}
                                    placeholder="Hae kurssin nimestä tai kuvauksesta" 
                                    className="form-control" />
                            </FormGroup>
                            <div>
                                <Label>Kurssin aihe</Label>
                                <Select
                                    value={this.state.selectedCourseTopic}
                                    onChange={this.handleSelectCourseTopic}
                                    options={this.state.selectCourseTopic}
                                    className="react-select"
                                />
                            </div>
                            <div>
                                <Label>Järjestäjä</Label>
                                <Select
                                    value={this.state.selectedPublisherValue}
                                    onChange={this.handleSelectPublisher}
                                    options={this.state.selectPublisherValue}
                                    className="react-select"
                                />
                            </div>                                    
                        </div>
                    </Jumbotron>
                </Col>
            </Row>
        )
    }
}

SearchCourseBanner.propTypes = {
    getSearchInput: PropTypes.func.isRequired,
    allCourses: PropTypes.array.isRequired,
    getPublisherInput: PropTypes.func.isRequired,

}

export default SearchCourseBanner
