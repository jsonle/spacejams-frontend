import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const TrackItem = ({ track, listNumber, displayArtistNames }) => {
    return (
        <ListGroup.Item action>
            <div className="track-info">
                <span id="track-number">{listNumber}.</span> {track.name} <span id="track-artists"> {displayArtistNames(track.artists)}</span>
            </div>
        </ListGroup.Item>
    );
}
 
export default TrackItem;