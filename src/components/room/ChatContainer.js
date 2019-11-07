import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import MessageBox from './MessageBox';
const endpoint = "http://127.0.0.1:8000"
const socket = socketIOClient(endpoint);

class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentMessages : [],
            newMessage: {
                user_id: props.currentUser.id,
                room_id: props.roomId,
                content: ""
            },
            endPoint: "http://127.0.0.1:8000"
        }
    }

    componentDidMount() {
        const roomId = this.props.roomId;
        socket.emit('enter', `room_${roomId}`)

        if (!this.state.currentMessages[0]) {
            this.getCurrentRoomMessages()
        }
    }

    getCurrentRoomMessages = () => {
        const roomId = this.props.roomId;

        fetch(`http://localhost:3000/rooms/${roomId}`)
        .then(resp => resp.json())
        .then(room => {
            this.setState({
                messages: room.messages
            })
        })
    }

    sendMessage = (socket, event) => {
        event.preventDefault();
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state.newMessage)
        }
        fetch('http://localhost:3000/rooms', config)
        .then(resp => resp.json())

    }

    handleInputChange = (event) => {
        this.setState({
            newMessage: {
                ...this.state.newMessage,
                content: event.target.value
            }
        })
    }

    componentWillUnmount() {
        const roomId = this.props.roomId;
        socket.emit('leave', `room_${roomId}`)
    }



    render() { 
        return (
            <div>
                <MessageBox />
                <Form>
                    <Form.Control className="message-input" type="text" onChange={this.handleInputChange} value={this.state.newMessage.content} placeholder="Enter message"/>
                    <Button variant="success" type="submit" onClick={(event) => this.sendMessage(socket, event)}>Send</Button>
                </Form>
            </div>
        );
    }
}
 
export default ChatContainer;