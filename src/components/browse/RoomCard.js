import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


const RoomCard = ({ room, handleClick }) => {
    const {id, playlist_id, playlist_image_url, playlist_name, users} = room
    return (
        <Card>
            <Card.Img variant="top" src={playlist_image_url} />
            <Card.Body>
                <Card.Title>{playlist_name}</Card.Title>
                <Card.Text>
                    Placeholder description
                </Card.Text>
                {/* <Link to={`/room/${playlist_id}/${id}`}> */}
                    <Button variant="success" onClick={handleClick} value={id} name={playlist_id}>Enter Room</Button>
                {/* </Link> */}
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{users.length} users currently listening</small>
            </Card.Footer>
        </Card>
    );
}
 
export default RoomCard;