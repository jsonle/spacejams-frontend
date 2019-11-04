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

    render() { 
        console.log(this.state.rooms)
        return (
            <div className="browse-list">
                <RoomsList currentUser={this.props.currentUser} rooms={this.state.rooms}/>
            </div>
        );
    }
}
 
export default BrowseContainer;