import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import WelcomePage from './WelcomePage';

class HomePageContainer extends Component {
    state = {  }
    render() { 
        return (
            <div>
                {!this.props.currentUser ? <Redirect to='/login' /> : <WelcomePage currentUser={this.props.currentUser} />}
            </div>
        );
    }
}
 
export default HomePageContainer;