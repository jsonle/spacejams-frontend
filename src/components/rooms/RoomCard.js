import React from 'react';
import Card from 'react-bootstrap/Card';
import { LinkContainer } from 'react-router-bootstrap';
import Button from 'react-bootstrap/Button';


const RoomCard = ({ room }) => {
    return (
        <Card>
            <Card.Img variant="top" src={room.playlist_image_url} />
            <Card.Body>
                <Card.Title>{room.playlist_name}</Card.Title>
                <Card.Text>
                    Placeholder description
                </Card.Text>
                <LinkContainer to={`/rooms/${room.playlist_id}`}>
                    <Button variant="success">Enter Room</Button>
                </LinkContainer>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{room.users.length} users currently listening</small>
            </Card.Footer>
        </Card>
    );
}
 
export default RoomCard;