import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TrackItem from './TrackItem';

class TracksList extends Component {
    state = {
        currentTracks: null
    }

    componentDidMount() {
        if (!this.state.currentTracks) {
            this.getTracks()
        }
    }

    getTracks = () => {
        const accessToken = JSON.parse(localStorage.getItem("user")).access_token

        fetch(`https://api.spotify.com/v1/playlists/${this.props.playlistId}`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(resp => resp.json())
        .then(tracks => {
            this.setState({
                currentTracks: tracks
            })
        })
    
    }
    render() { 
        console.log(this.props)
        return (
            <ListGroup>
                
            </ListGroup>
        );
    }
}
 
export default TracksList;