import React, { Component } from 'react';
import {Nav,Navbar,NavItem,NavbarBrand, NavLink} from 'reactstrap';
import './App.css';


class AppNav extends Component {
    state = {  }
    render() {
        return (
          
          <div>
            <Navbar color="dark" dark  expand="md">
              <NavbarBrand href="/">Ads portal Application</NavbarBrand>
                <Nav className="ml-auto" navbar>
                  <NavItem>
                    <NavLink href="/">Home</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/categories">Categories</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="/offers">Offers</NavLink>
                  </NavItem>
                
                </Nav>
          
            </Navbar>
          </div>
         
        );
      }
}
 
export default AppNav;