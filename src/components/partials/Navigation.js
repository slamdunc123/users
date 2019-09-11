import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.toggleBurgerMenu = this.toggleBurgerMenu.bind(this);
    this.closeBurgerMenu = this.closeBurgerMenu.bind(this);
    this.state = {
      isOpen: false
    };
  }

  // toggle burger menu when clicked
  toggleBurgerMenu() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  // toggle burger menu when menu link is clicked
  closeBurgerMenu() {
    if (this.state.isOpen === true) {
      this.toggleBurgerMenu();
    }
  }

  render() {
    return (
      <div>
        <Navbar
          className='navbar navbar-expand-lg navbar-dark bg-dark'
          expand='md'
        >
          <NavbarBrand href='/'>Users</NavbarBrand>
          <NavbarToggler onClick={this.toggleBurgerMenu} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className='ml-auto' navbar>
              <NavItem>
                <NavLink
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  to='/'
                >
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink
                  onClick={e => {
                    this.closeBurgerMenu(e);
                  }}
                  to='/users'
                >
                  Users
                </NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Navigation;
