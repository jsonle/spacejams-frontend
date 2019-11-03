import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class NavbarContainer extends Component {
    state = {  }
    
    render() { 
        return (
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand>JukeBox</Navbar.Brand>
            </Navbar>
        );
    }
}
 
export default NavbarContainer ;