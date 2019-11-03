import React, { Component } from 'react';

class WelcomePage extends Component {
    state = {  }

    render() { 
        console.log(this.props)
        return (
            <div>
                <h1>Welcome {this.props.currentUser.display_name}</h1>
            </div>
        );
    }
}
 
export default WelcomePage;