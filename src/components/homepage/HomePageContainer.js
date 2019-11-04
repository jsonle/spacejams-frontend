import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import WelcomePage from './WelcomePage';
import LoginPage from '../login/LoginPage';

class HomePageContainer extends Component {
    state = {  }
    render() { 
        console.log(this.props.currentUser);
        return (
            <div>
                {this.props.currentUser ? <WelcomePage currentUser={this.props.currentUser} /> : <LoginPage />}
            </div>
        );
    }
}
 
export default HomePageContainer;