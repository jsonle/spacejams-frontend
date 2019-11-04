import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class NavbarContainer extends Component {
    state = {  }

    render() { 
        return (
            <Navbar className="navbar" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        JukeBox
                    </Navbar.Brand>
                </LinkContainer>
            </Navbar>
        );
    }
}
 
export default NavbarContainer ;