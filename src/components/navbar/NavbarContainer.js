import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image'
import { LinkContainer } from 'react-router-bootstrap';
import UserMenu from './UserMenu';

class NavbarContainer extends Component {
    state = {  }

    handleLogoutClick = event => {
        event.preventDefault();
        localStorage.clear();
        this.props.history.push('/');
    }

    render() { 
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <Navbar className="navbar" bg="dark" variant="dark">
                <LinkContainer to="/">
                    <Navbar.Brand>
                        <Image id="brand=image" src="https://svgur.com/i/G6L.svg" height="40px" width="50px"/><span id="brand-name" style={{color: '#FFFF00'}}>SpaceJams</span>
                    </Navbar.Brand>
                </LinkContainer>
                { user && <UserMenu user={user} handleLogoutClick={this.handleLogoutClick}/>}
            </Navbar>

            
        );
    }
}
 
export default withRouter(NavbarContainer) ;