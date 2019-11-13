import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const TrackItem = ({ track, listNumber, displayArtistNames, handleTrackClick }) => {
    return (
        <ListGroup.Item action variant="light" onClick={event => handleTrackClick(event, track, listNumber)}>
            <div className="track-info">
                <span id="track-number">{listNumber + 1}.</span> {track.name} <span id="track-artists"> {displayArtistNames(track.artists)}</span>
            </div>
        </ListGroup.Item>
    );
}
 
export default TrackItem;