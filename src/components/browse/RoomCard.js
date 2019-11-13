import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';


const RoomCard = ({ room, handleClick }) => {
    const {id, playlist_id, playlist_image_url, playlist_name, playlist_description, users} = room
    return (
        <Card>
            <Card.Img variant="top" src={playlist_image_url} />
            <Card.Body>
                <Card.Title>{playlist_name}</Card.Title>
                <Card.Text>
                    {playlist_description}
                </Card.Text>
                    <Button variant="warning" onClick={handleClick} value={id} name={playlist_id}>Enter Room</Button>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{users.length} users currently listening</small>
            </Card.Footer>
        </Card>
    );
}
 
export default RoomCard;