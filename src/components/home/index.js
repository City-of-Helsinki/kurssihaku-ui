import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {setLocale} from '../../actions'
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import './index.scss'

class test extends Component {
    
    changeLanguageToEn = ()=>{
        this.props.setLocale('en')
    }
    changeLanguageToFi = ()=>{
        this.props.setLocale('fi')
    }
    render() {
        return (
            <div>
                <nav>
                    <button onClick={this.changeLanguageToEn}>En</button> 
                    <button onClick={this.changeLanguageToFi}>Fi</button>
                </nav>               
                <hr/>
                <div>
                    <h1><FormattedMessage id="nav.dashboard" defaultMessage="Dashboard" /></h1>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    <Button color="info">Send</Button>
                </div>
            </div>
        )
    }
}

test.propTypes = {
    setLocale: PropTypes.func.isRequired,
}

export default connect(null, {setLocale})(test)
