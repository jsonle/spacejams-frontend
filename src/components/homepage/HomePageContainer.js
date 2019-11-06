import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import LoginPage from '../login/LoginPage';

class HomePageContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {this.props.currentUser ? <WelcomePage currentUser={this.props.currentUser} /> : <LoginPage />}
            </div>
        );
    }
}
 
export default HomePageContainer;