import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {setLocale} from '../../actions'
import PropTypes from 'prop-types';
import {Button, Form, FormGroup, Label, Input, FormText} from 'reactstrap';
import HelIcon from '../HelIcon'


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
                    <a role="button" onClick={this.changeLanguageToEn}>En</a> |
                    <a role="button" onClick={this.changeLanguageToFi}>Fi</a>
                </nav>               
                <hr/>
                <div>
                    <h1><FormattedMessage id="nav.dashboard" defaultMessage="Dashboard" /></h1>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                    <Button color="info">Send</Button>
                </div>
                <HelIcon iconName="calendar" />hello
            </div>
        )
    }
}

test.propTypes = {
    setLocale: PropTypes.func.isRequired,
}

export default connect(null, {setLocale})(test)
