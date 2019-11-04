import React, { Component } from 'react';

class RoomContainer extends Component {
    state = {
        currentPlaylist: null
    }

    render() { 
        console.log(this.props)
        return (
            <h1>Playlist room</h1>
        );
    }
}
 
export default RoomContainer;