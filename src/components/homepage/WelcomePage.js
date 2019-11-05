import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import { LinkContainer } from 'react-router-bootstrap';

class WelcomePage extends Component {
    state = {  }

    render() { 
        return (
            <div>
                <h1>Welcome, {this.props.currentUser.display_name}</h1>
                <LinkContainer to="/browse">
                    <Button variant="success">Start Listening</Button>
                </LinkContainer>
            </div>
        );
    }
}
 
export default WelcomePage;