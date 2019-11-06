import React from 'react';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';

const PlaylistDetails = ( {image, playlist, owner, handleClick} ) => {
    return (
        <div className="playlist-details">
            <Image className="playlist-cover" src={image} fluid />
            <Card className="playlist-info">
                <Card.Body>
                    <Card.Title>{playlist.name}</Card.Title>
                        <footer>Playlist by {owner.display_name}</footer>
                    <Button variant="success" onClick={handleClick}>Leave Room</Button>
                </Card.Body>
            </Card>      
        </div>
    );
}
 
export default PlaylistDetails;