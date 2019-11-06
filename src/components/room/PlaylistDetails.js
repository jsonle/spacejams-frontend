import React from 'react';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';

const PlaylistDetails = ( {image, playlist, owner, handleClick} ) => {
    return (
        <div className="playlist-details">
            <Image className="playlist-cover" src={image}  />
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                <footer>Playlist by {owner.display_name}</footer>
                <p>{playlist.description}</p>
                <div className="leave-button">
                    <Button variant="success" onClick={handleClick}>Leave Room</Button>
                </div>
            </div>      
        </div>
    );
}
 
export default PlaylistDetails;