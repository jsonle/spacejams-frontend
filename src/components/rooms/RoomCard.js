import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';


const RoomCard = ({ room }) => {
    const {playlist_id, playlist_image_url, playlist_name, users} = room
    return (
        <Card>
            <Card.Img variant="top" src={playlist_image_url} />
            <Card.Body>
                <Card.Title>{playlist_name}</Card.Title>
                <Card.Text>
                    Placeholder description
                </Card.Text>
                <LinkContainer to={`/rooms/${playlist_id}`}>
                    <Button variant="success">Enter Room</Button>
                </LinkContainer>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{users.length} users currently listening</small>
            </Card.Footer>
        </Card>
    );
}
 
export default RoomCard;