import React, {Component} from 'react'
import {Row, Col, Label, Input, Jumbotron} from 'reactstrap'
import './index.scss'

class SearchCourses extends Component {
    render() {
        return (
            <div className="search-course-section">
                <section>
                    <Row>
                        <Col xs="12">
                            <Jumbotron>
                                <h1>Selaa Kursseja</h1>
                                <div className="search-inputs">
                                    <div className="form-group">
                                        <Label>Hakuteksti</Label>
                                        <Input type="text"  placeholder="Hae kurssin nimestä tai kuvauksesta" className="form-control" />
                                    </div>
                                </div>
                            </Jumbotron>
                        </Col>
                    </Row>
                </section>
            </div>
        )
    }
}

export default SearchCourses
