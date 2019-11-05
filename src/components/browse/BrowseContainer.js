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

    handleClick = (event) => {
        event.preventDefault();
        const room_id = event.target.value
        const playlist_id = event.target.name
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
                    room_id: room_id
                }
            })
        }

        fetch(`http://localhost:3000/users/${user_id}`, config)
        .then( resp => resp.json())
        .then( updatedUser => {
            console.log(updatedUser);
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedUser))
            this.props.history.push(`/room/${playlist_id}/${room_id}`)
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