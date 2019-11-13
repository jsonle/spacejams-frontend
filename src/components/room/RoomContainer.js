import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import TracksList from './TracksList';
import PlaylistDetails from './PlaylistDetails';
import ChatContainer from './ChatContainer';
import AudioPlayer from './AudioPlayer';

class RoomContainer extends Component {
    state = {
        currentPlaylist: {},
        playlistImage: "",
        playlistOwner: {},
        currentTrack: null
    }

    componentDidMount() {
        if (!this.state.currentPlaylist.id) {
            this.getCurrentPlaylist();
        }
    }

    getCurrentPlaylist = () => {
        const playlistId = this.props.match.params.playlistId
        const accessToken = JSON.parse(localStorage.getItem("user")).access_token

        fetch(`https://api.spotify.com/v1/playlists/${playlistId}?fields=name,description,images,owner`, {
            headers: {
                "Authorization": `Bearer ${accessToken}`
            }
        })
        .then(resp => resp.json())
        .then(playlist => {
            console.log(playlist)
            this.setState({
                currentPlaylist: playlist,
                playlistImage: playlist.images[0].url,
                playlistOwner: playlist.owner
            })
        })
    }


    handleLeaveRoomClick = (event) => {
        event.preventDefault();
        this.props.history.push('/browse')
    }

    playNextTrack = () => {
        const trackIndex = localStorage.getItem("currentTrackIndex");
        const tracks = JSON.parse(localStorage.getItem("tracks"))
        this.setState({
            currentTrack: tracks[parseInt(trackIndex + 1)].track
        })
        localStorage.setItem("currentTrackIndex", parseInt(trackIndex) + 1);
    }

    onSelectTrack = (track) => {
        this.setState({
            currentTrack: track
        })
    }

    render() { 
        console.log(this.state.currentTrack);
        return (
            <>
            <Container fluid>
                <Row>
                    <Col sm={8} className="playlist-column">
                        <Image className="playlist-cover" src={this.state.playlistImage} />
                        <PlaylistDetails playlist={this.state.currentPlaylist} owner={this.state.playlistOwner} />
                        <AudioPlayer track={this.state.currentTrack} playNextTrack={this.playNextTrack}/>
                        <TracksList playlistId={this.props.match.params.playlistId} onSelectTrack={this.onSelectTrack}/>
                    </Col>
                    <Col className="chat-column">
                        <ChatContainer
                         roomId={this.props.match.params.roomId}
                         currentUser={this.props.currentUser}
                         handleLeaveRoomClick={this.handleLeaveRoomClick}
                         />

                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}
 
export default RoomContainer;