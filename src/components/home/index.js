import React, {Component} from 'react'
import {Row, Col, Input} from 'reactstrap';
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
                                    <Input type="text" placeholder="Hae kursseja"/>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </section>
            </div>            
        )
    }
}


export default FrontPage
