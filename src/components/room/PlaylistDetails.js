import React from 'react';

const PlaylistDetails = ( { playlist, owner} ) => {
    return (
        <div className="playlist-details">
            <div className="playlist-info">
                <h2>{playlist.name}</h2>
                Playlist by {owner.display_name}
            </div>      
        </div>
    );
}
 
export default PlaylistDetails;