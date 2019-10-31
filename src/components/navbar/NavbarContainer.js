import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';

class NavbarContainer extends Component {
    state = {  }

    handleLoginClick = (event) => {
        event.preventDefault();

        fetch("http://localhost:3000/login")
        .then(resp => resp.json())
        .then(response => console.log(response))
    }

    render() { 
        return (
            <Navbar className="navbar" bg="light" expand="lg">
                <Navbar.Brand>JukeBox</Navbar.Brand>
                <Button onClick={this.handleLoginClick} variant="success">Log in with Spotify</Button>
            </Navbar>
        );
    }
}
 
export default NavbarContainer ;