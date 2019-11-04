import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class LoginPage extends Component {
    state = {  }
    render() { 
        return (
            <div>
                <h1>Welcome to JukeBox!</h1>
                <Button as="a" href="http://localhost:3000/auth" variant="success">Login with Spotify to get started!</Button>
            </div>
        );
    }
}
 
export default LoginPage;