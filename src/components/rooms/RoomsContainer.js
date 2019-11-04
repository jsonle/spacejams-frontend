import React, { Component } from 'react';
import RoomsList from './RoomsList';
import { Route } from 'react-router-dom';
import PlaylistRoomContainer from './PlaylistRoomContainer';

class RoomsContainer extends Component {
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
        console.log(this.props.match.url)
        return (
            <div className="browse-list">
                <RoomsList currentUser={this.props.currentUser} rooms={this.state.rooms}/>
                <Route path={`${this.props.match.url}/:playlist_id`} render={(routeProps) => <PlaylistRoomContainer {...routeProps} currentUser={this.props.currentUser}/>}/>
            </div>
        );
    }
}
 
export default RoomsContainer;