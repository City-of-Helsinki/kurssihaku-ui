import React, {Component} from 'react'
import {Row, Col, Label, Input, Jumbotron, FormGroup} from 'reactstrap'
import Select from 'react-select'
import {options} from '../../MOCKS'
import './index.scss'

class SearchCourses extends Component {
    constructor(props){
        super(props);
        this.state = {
            selectedOption: null,
        }
    }

    handleChange = (selectedOption) => {
        this.setState({selectedOption});
        console.log(`Option selected:`, selectedOption);
    }
    render() {
        return (
            <div className="search-course-section">
                <section>
                    <Row>
                        <Col xs="12">
                            <Jumbotron>
                                <h1>Selaa Kursseja</h1>
                                <div className="search-inputs">
                                    <FormGroup>
                                        <Label>Hakuteksti</Label>
                                        <Input type="text"  placeholder="Hae kurssin nimestä tai kuvauksesta" className="form-control" />
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
                </section>
                <section>
                    hello
                </section>
            </div>
        )
    }
}

export default SearchCourses
