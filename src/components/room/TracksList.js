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

        fetch(`https://api.spotify.com/v1/playlists/${this.props.playlistId}/tracks?fields=items.track(!available_markets)&limit=50`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(resp => resp.json())
        .then(tracks => {
            const tracksList = tracks.items.filter(track => track.track.preview_url);
            console.log(tracksList);
            localStorage.setItem("tracks", JSON.stringify(tracksList));

            this.setState({
                currentTracks: tracks.items
            })
            return tracks
        })
    }

    // Takes care of tracks that have multiple artists
    displayArtistNames = (artists) => {
        const nameArray = []
        artists.map(artist => {
            return nameArray.push(artist.name)
        })
        return nameArray.join(", ")
    }

    handleTrackClick = (event, track, listNumber) => {
        event.preventDefault();
        localStorage.setItem("currentTrackIndex", listNumber)
        this.props.onSelectTrack(track);
    }

    displayTracks = () => {
        return this.state.currentTracks.map( (track, index) => {
            if (track.track.preview_url) {
                return (
                    <TrackItem
                    track={track.track}
                    key={index}
                    listNumber={index}
                    displayArtistNames={this.displayArtistNames}
                    handleTrackClick={this.handleTrackClick}
                    />
                )
            }
        })
    }

    render() { 
        // console.log(this.state.currentTracks[0])
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