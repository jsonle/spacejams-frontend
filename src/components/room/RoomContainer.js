import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import TracksList from './TracksList';
import PlaylistDetails from './PlaylistDetails';

class RoomContainer extends Component {
    state = {
        currentPlaylist: {},
        currentRoom: {}
    }

    componentDidMount() {
        this.getCurrentPlaylist();
        this.getCurrentRoom();
    }

    getCurrentPlaylist = () => {
        const playlist_id = this.props.match.params.playlist_id
        const access_token = JSON.parse(localStorage.getItem("user")).access_token

        fetch(`https://api.spotify.com/v1/playlists/${playlist_id}`, {
            headers: {
                "Authorization": `Bearer ${access_token}`
            }
        })
        .then(resp => resp.json())
        .then(playlist => {
            this.setState({
                currentPlaylist: playlist
            })
        })
    }

    getCurrentRoom = () => {
        const room_id = this.props.match.params.room_id

        fetch(`http://localhost:3000/rooms/${room_id}`)
        .then(resp => resp.json())
        .then(room => {
            this.setState({
                currentRoom: room
            })
        })
    }

    handleLeaveRoomClick = (event) => {
        event.preventDefault();
        this.props.history.push('/browse')
    }

    // Removes user and room association on when user leaves room
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
        console.log(this.state)
        return (
            <>
            <Container>
                <Row>
                    <Col sm={8}>
                        <Row>
                            <TracksList />
                        </Row>
                    </Col>
                    <Col>
                        <Button variant="success" onClick={this.handleLeaveRoomClick}>Leave Room</Button>
                    </Col>
                </Row>
            </Container>
            </>
        );
    }
}
 
export default RoomContainer;