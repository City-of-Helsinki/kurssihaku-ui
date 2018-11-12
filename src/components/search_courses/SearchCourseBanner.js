import React, {Component} from 'react'
import {Row, Col, Label, Input, Jumbotron, FormGroup} from 'reactstrap'
import {options} from '../../MOCKS'
import Select from 'react-select'
import PropTypes from 'prop-types'


export class SearchCourseBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedPublisherValue: null,
            searchInput: '',
            selectPublisherValue: [],
        }
    }
 
    componentWillReceiveProps(nextProps){
        const selectPublisherValue = nextProps.allCourses.map(course=> {return {label: course.publisher}})
        const uniqueselectPublisherValue = selectPublisherValue.filter((value, index, self)=>
            index === self.findIndex(t=>(
                t.label === value.label && t.label === value.label
            ))
        )
        this.setState({
            selectPublisherValue: uniqueselectPublisherValue,
            // searchInput: nextProps.inputSearchCourse,

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
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
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
