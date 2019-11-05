import React, { Component } from 'react';
import RoomCard from './RoomCard';
import CardDeck from 'react-bootstrap/CardDeck'

class RoomsList extends Component {
    state = {

    }

    displayRooms = () => {
       return this.props.rooms.map( (room, index) => {
            return <RoomCard room={room} key={index} handleClick={this.props.handleClick}/>
        })
    }


    render() { 
        return (
            <CardDeck>
                {this.displayRooms()}
            </CardDeck>
        );
    }
}
 
export default RoomsList;