import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class NavbarContainer extends Component {
    state = {  }
    render() { 
        return (
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand>JukeBox</Navbar.Brand>
                <Button href="http://localhost:3000/api/v1/login" variant="success">Log in with Spotify</Button>
            </Navbar>
        );
    }
}
 
export default NavbarContainer ;