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
    DropdownItem} from 'reactstrap';
import './index.scss' 

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    render() {
        return (
            <div className="header">
                <Navbar color="faded" light expand="xs">
                    <NavbarBrand href="/"><HelsinkiLogo className="helsinki-logo" /></NavbarBrand>
                    <Nav className="ml-auto nav-ul" navbar>
                        <UncontrolledDropdown nav inNavbar>
                                
                            <DropdownToggle nav>
                                <Globe className="globe-icon" /><span className="header-text">FI</span>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem>
                                        EN
                                </DropdownItem>
                                <DropdownItem>
                                        SV
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

export default Header
