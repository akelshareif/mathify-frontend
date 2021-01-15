import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import {
    Container,
    Button,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
} from 'reactstrap';
import { clearData } from '../../actions';
import './NavBar.css';

const NavBar = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const handleLogout = () => {
        localStorage.clear();
        dispatch(clearData());
        history.push('/');
    };

    return (
        <Navbar className="NavBar" light expand="md">
            <Container>
                <NavbarBrand tag={Link} to="/dashboard">
                    Mathify
                </NavbarBrand>
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem>
                            <NavLink tag={Link} to="/game/new">
                                New Game
                            </NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink tag={Link} to="/leaderboards">
                                Leaderboards
                            </NavLink>
                        </NavItem>
                    </Nav>
                    <Nav navbar>
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <i className="far fa-user"></i>
                            </DropdownToggle>
                            <DropdownMenu className="text-center" right>
                                <DropdownItem tag={Link} to="/dashboard">
                                    Dashboard
                                </DropdownItem>
                                <DropdownItem divider />
                                <DropdownItem tag={Button} className="text-danger" onClick={handleLogout}>
                                    Logout
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
                </Collapse>
            </Container>
        </Navbar>
    );
};

export default NavBar;
