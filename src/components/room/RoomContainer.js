import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import TracksList from './TracksList';

class RoomContainer extends Component {
    state = {
        currentPlaylist: null
    }

    handleLeaveRoomClick = (event) => {
        event.preventDefault();
        this.props.history.push('/browse')
    }

    componentWillUnmount() {
        const user_id = JSON.parse(localStorage.getItem("user")).id

        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    id: user_id,
                    room_id: null
                }
            })
        }

        fetch(`http://localhost:3000/users/${user_id}`, config)
        .then( resp => resp.json())
        .then( updatedUser => {
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedUser))
        })
    }

    render() { 
        console.log(this.props)
        return (
            <>
            <h1>Playlist room</h1>
            <Button variant="success" onClick={this.handleLeaveRoomClick}>Leave Room</Button>
            </>
        );
    }
}
 
export default RoomContainer;