import React, {Component} from 'react'
import {FormattedMessage} from 'react-intl'
import {connect} from 'react-redux'
import {setLocale} from '../../actions'
import PropTypes from 'prop-types';


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
                    <FormattedMessage id="nav.dashboard" defaultMessage="Dashboard" />

                </div>
            </div>
        )
    }
}

test.propTypes = {
    setLocale: PropTypes.func.isRequired,
}

export default connect(null, {setLocale})(test)
