import React, { Component } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import TrackItem from './TrackItem';

class TracksList extends Component {
    state = {
        currentTracks: []
    }

    componentDidMount() {
        if (!this.state.currentTracks[0]) {
            this.getTracks()
        }
    }

    getTracks = () => {
        const accessToken = JSON.parse(localStorage.getItem("user")).access_token

        fetch(`https://api.spotify.com/v1/playlists/${this.props.playlistId}/tracks?fields=items.track(!available_markets)`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(resp => resp.json())
        .then(tracks => {
            this.setState({
                currentTracks: tracks.items
            })
        })
    
    }

    displayTracks = () => {
        return this.state.currentTracks.map( (track, index) => <TrackItem track={track.track} key={index} listNumber={index + 1}/>)
    }


    render() { 
        console.log(this.state.currentTracks[2])
        return (
            <div className="tracks-list">
                <ListGroup>
                    {this.displayTracks()}
                </ListGroup>
            </div>

        );
    }
}
 
export default TracksList;