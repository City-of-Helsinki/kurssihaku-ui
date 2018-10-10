import React, {Component} from 'react';
import {ReactComponent  as HelsinkiLogo} from 'hel-icons/dist/shapes/helsinki-logo.svg'
import {ReactComponent  as Globe} from 'hel-icons/dist/shapes/globe.svg'
import {ReactComponent  as User} from 'hel-icons/dist/shapes/user-o.svg'
import {
    Navbar,
    NavbarBrand,
    Nav,
    NavItem,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem} from 'reactstrap'
import {connect} from 'react-redux'
import {setLocale} from '../../../actions'
import PropTypes from 'prop-types';
import './index.scss' 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }

    changeLanguageToEn = ()=>{
        this.props.setLocale('en')
    }
    changeLanguageToFi = ()=>{
        this.props.setLocale('fi')
    }
    changeLanguageToSv = ()=>{
        this.props.setLocale('sv')
    }
    render() {
        let lang = this.props.lang
        if(lang === 'en'){
            lang = 'EN'
        }
        else if(lang === 'fi'){
            lang = 'FI'
        }
        else lang = 'SV'
        return (
            <div className="header">
                <Navbar color="faded" light expand="xs">
                    <NavbarBrand href="/"><HelsinkiLogo className="helsinki-logo" /></NavbarBrand>
                    <Nav className="ml-auto nav-ul" navbar>
                        <UncontrolledDropdown nav inNavbar>
                                
                            <DropdownToggle nav>
                                <Globe className="globe-icon" /><span className="header-text">{lang}</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.changeLanguageToEn}>
                                        English
                                </DropdownItem>
                                <DropdownItem onClick={this.changeLanguageToFi}>
                                        Suomi
                                </DropdownItem>
                                <DropdownItem onClick={this.changeLanguageToSv}>
                                        Svenska
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        <NavItem>
                            <User className="user-icon" /><span className="header-text">Kiraudu</span> 
                        </NavItem>
                            
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

Header.propTypes = {
    setLocale: PropTypes.func.isRequired,
}

const mapStateToProps = state =>{
    return{
        lang: state.locale.lang,
    }
}

export default connect(mapStateToProps, {setLocale})(Header)
