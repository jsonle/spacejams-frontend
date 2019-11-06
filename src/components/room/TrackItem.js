import React from 'react';
import ListGroup from 'react-bootstrap/ListGroup'

const TrackItem = ({ track, listNumber }) => {
    return (
        <ListGroup.Item action>
            <div className="track-info">
                <span>{listNumber}.</span> {track.name} by {track.artists[0].name}
            </div>
        </ListGroup.Item>
    );
}
 
export default TrackItem;