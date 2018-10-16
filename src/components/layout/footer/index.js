import React, {Component} from 'react'
import {Row, Col} from 'reactstrap'
import {ReactComponent  as HelsinkiLogo} from 'hel-icons/dist/shapes/helsinki-logo.svg'
import './index.scss'

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <section>
                    <Row>
                        <Col xs="12" className="footer-col">
                            <h4>Kurssihaku</h4>
                            <HelsinkiLogo className="helsinki-logo" />
                            <div className="footer-nav">
                                <span>Etusivu</span>
                                <span>Selaa Kursseja</span>
                                <span>Tietoja palvelusta</span>
                            </div>
                        </Col>
                    </Row>
                </section>
                <section>
                    <div className="info">
                        <span>Lähetä palautetta</span>
                        <span>|</span>
                        <span> Ota yhteyttä</span>
                        <span>|</span>
                        <span> 2018 Helsingin kaupunki</span>
                    </div>
                </section>
            </div>
        )
    }
}


export default Footer
