import React, { Component } from 'react';
import WelcomePage from './WelcomePage';
import LoginPage from '../login/LoginPage';

class HomePageContainer extends Component {
    state = {  }
    render() { 
        const user = JSON.parse(localStorage.getItem("user"));
        return (
            <div>
                { user ? <WelcomePage currentUser={user} /> : <LoginPage />}
            </div>
        );
    }
}
 
export default HomePageContainer;