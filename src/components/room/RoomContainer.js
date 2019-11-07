import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TracksList from './TracksList';
import PlaylistDetails from './PlaylistDetails';
import ChatContainer from './ChatContainer';

class RoomContainer extends Component {
    state = {
        currentPlaylist: {},
        playlistImage: "",
        playlistOwner: {}
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

    // Removes user and room association when user leaves room
    componentWillUnmount() {
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
                    room_id: null
                }
            })
        }

        fetch(`http://localhost:3000/users/${userId}`, config)
        .then( resp => resp.json())
        .then( updatedUser => {
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedUser)) // Updates user in local storage
        })
    }

    render() { 
        return (
            <>
            <Container fluid>
                <Row>
                    <Col sm={8} className="playlist-column">
                        <PlaylistDetails 
                            playlist={this.state.currentPlaylist} 
                            image={this.state.playlistImage} 
                            owner={this.state.playlistOwner}
                            handleClick={this.handleLeaveRoomClick}
                        />
                        <TracksList playlistId={this.props.match.params.playlistId}/>
                    </Col>
                    <Col>
                        <ChatContainer currentRoom={this.props.currentRoom} roomId={this.props.match.params.roomId} currentUser={this.props.currentUser}/>

                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}
 
export default RoomContainer;