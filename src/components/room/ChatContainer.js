import React, { Component } from 'react';

class ChatContainer extends Component {
    state = {
        currentRoom: {}
    }

    componentDidMount() {
        if (!this.state.currentRoom.id) {
            this.getCurrentRoom()
        }
    }

    getCurrentRoom = () => {
        const roomId = this.props.roomId

        fetch(`http://localhost:3000/rooms/${roomId}`)
        .then(resp => resp.json())
        .then(room => {
            this.setState({
                currentRoom: room
            })
        })
    }

    render() { 
        console.log(this.state.currentRoom)
        return (
            <div></div>
        );
    }
}
 
export default ChatContainer;