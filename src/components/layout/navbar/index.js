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
            navStick: false,
        };
    }

    componentDidMount(){
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = () =>{
        if(window.scrollY > 65){
            this.setState({
                navStick: true,
            })
        } else if(window.scrollY < 60){
            this.setState({
                navStick: false,
            })
        }
    }
    toggle = ()=> {
        this.setState({
            isOpen: !this.state.isOpen,
        });
    }
    render() {
        return (
            <div className={`menu-bar ${this.state.navStick ? 'fixed-top' : ''}`}>
                <Navbar light expand="md">
                    <NavbarBrand tag={Link} to="/" href="#"><h5><FormattedMessage id="app.course.search" /></h5></NavbarBrand>
                    <NavbarToggler onClick={this.toggle} className="custom-toggler" />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="mr-auto" navbar>
                            <NavItem>
                                <NavLink tag={Link} to="/search-courses" onClick={this.toggle}><FormattedMessage id="app.browse.course" /></NavLink>
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
