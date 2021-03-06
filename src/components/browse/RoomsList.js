import React, { Component } from 'react';
import RoomCard from './RoomCard';
// import CardDeck from 'react-bootstrap/CardDeck'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'

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
            <Container className="col-lg-10 col-md-12">
                <Row id="browse-row">
                {this.displayRooms()}
                </Row>
            </Container>
        );
    }
}
 
export default RoomsList;