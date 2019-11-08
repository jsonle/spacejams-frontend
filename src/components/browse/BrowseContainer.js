import React, { Component } from 'react';
import RoomsList from './RoomsList';

class BrowseContainer extends Component {
    state = {
        rooms: []
    }

    componentDidMount() {
        this.fetchRooms();
    }

    fetchRooms = () => {
        fetch('http://localhost:3000/rooms')
        .then(resp => resp.json())
        .then(resp => {
            this.setState({
                rooms: resp
            })
        })
    }

    // User enters a room
    handleClick = (event) => {
        event.preventDefault();
        const roomId = event.target.value
        const playlistId = event.target.name
        const userId = JSON.parse(localStorage.getItem("user")).id

        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    id: userId,
                    room_id: roomId
                }
            })
        }

        fetch(`http://localhost:3000/users/${userId}`, config)
        .then( resp => resp.json())
        .then( updatedUser => {
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedUser))
            this.props.history.push(`/room/${playlistId}/${roomId}`)
        })
    }

    render() { 
        return (
            <>
            <div className="browse-list">
                <RoomsList currentUser={this.props.currentUser} rooms={this.state.rooms} handleClick={this.handleClick}/>
            </div>
                
            </>
        );
    }
}
 
export default BrowseContainer;