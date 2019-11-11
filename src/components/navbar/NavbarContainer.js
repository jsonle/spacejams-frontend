import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
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
                        <span style={{color: '#FFFF00'}}>JukeBox</span>
                    </Navbar.Brand>
                </LinkContainer>
                { user && <UserMenu user={user} handleLogoutClick={this.handleLogoutClick}/>}
            </Navbar>

            
        );
    }
}
 
export default withRouter(NavbarContainer) ;