import React, {Component} from 'react'
import {Row, Col, Label, Input, Jumbotron, FormGroup} from 'reactstrap'
import {options} from '../../MOCKS'
import Select from 'react-select'

export class SearchCourseBanner extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
            searchInput: '',
        }
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }
    handleSearchInput = (e)=>{
        this.setState({
            searchInput: e.target.value,
        })

    }
    render() {
        const {searchInput} = this.state
        const {allCourses} = this.props
        const searchedCourses = allCourses.filter(course=>(course.name['fi'] || course.name['en']).toLowerCase().indexOf(searchInput.toLowerCase()) !== -1)
        console.log('searchedCourses', searchedCourses);
        
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
                                    placeholder="Hae kurssin nimestä tai kuvauksesta" className="form-control" />
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
                                    value={this.state.selectedOption}
                                    onChange={this.handleChange}
                                    options={options}
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

export default SearchCourseBanner
