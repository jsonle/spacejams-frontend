import React, { Component } from 'react';
import RoomsList from './RoomsList';

class BrowseContainer extends Component {
    state = {
        rooms: []
    }

    componentDidMount() {
        
    }

    fetchRooms = () => {
        fetch('http://localhost:3000/rooms')
        .then(resp => resp.json())
        .then(resp => {
            console.log(resp)
        })
    }

    render() { 
        return (
            <div>

            </div>
        );
    }
}
 
export default BrowseContainer;