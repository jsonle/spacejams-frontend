import React from 'react';
import Image from 'react-bootstrap/Image';

const PlaylistDetails = ( {image, playlist, owner} ) => {
    return (
        <div className="playlist-details">
            <Image className="playlist-cover" src={image}  />
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                Playlist by {owner.display_name}
            </div>      
        </div>
    );
}
 
export default PlaylistDetails;