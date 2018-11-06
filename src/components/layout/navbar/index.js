import React from 'react'
import {Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem, NavLink} from 'reactstrap'
import {FormattedMessage} from 'react-intl'
import {Link} from 'react-router-dom'
import './index.scss'

class MenuBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isOpen: false,
        };
    }
    toggle = ()=> {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <div className="menu-bar">
                <Navbar light expand="md">
                    <NavbarBrand href="#"><h5><FormattedMessage id="app.course.search" /></h5></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/search-courses"><FormattedMessage id="app.browse.course" /></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="#"><FormattedMessage id="app.knowledge.service" /></NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

export default MenuBar
