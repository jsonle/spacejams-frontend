import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import MessageBox from './MessageBox';
import UsersPopover from './UsersPopover';
const endpoint = "http://127.0.0.1:8000"
const socket = socketIOClient(endpoint);

class ChatContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displayedMessages: {
                messages: []
            },
            newMessage: {
                user_id: props.currentUser.id,
                room_id: props.roomId,
                content: ""
            },
            currentUsers: []
        }
    }

    componentDidMount() {
        const user = JSON.parse(localStorage.getItem("user"));
        const roomId = this.props.roomId;
    
        socket.emit('enter', user);

        socket.on('joinRoom', message => {
            fetch(`http://localhost:3000/rooms/${roomId}`)
            .then(resp => resp.json())
            .then(room => {
                this.setState({
                    displayedMessages: {
                        messages: [...this.state.displayedMessages.messages, message]
                    },
                    currentUsers: room.users
                })
            })
        })

        socket.on('receiveMessage', message => {
            this.setState({
                displayedMessages: {
                    messages: [...this.state.displayedMessages.messages, message]
                }
            })
        });
    }

    

    handleSendMessage = (socket, event) => {
        event.preventDefault();
        let config = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(this.state.newMessage)
        }
        fetch('http://localhost:3000/messages', config)
        .then(resp => resp.json())
        .then( message => {
            console.log("successfully posted", message);
            socket.emit('sendMessage', message);
            this.setState({
                newMessage: {
                    ...this.state.newMessage,
                    content: ""
                }
            })
        })
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
        console.log(this.state)
        return (
            <>
                <MessageBox messages={this.state.displayedMessages.messages}/>
                <InputGroup className="mb-3">
                    <Form.Control
                     className="message-input" 
                     type="text" 
                     onChange={this.handleInputChange} 
                     value={this.state.newMessage.content} 
                     placeholder="Enter message"
                    />
                    <InputGroup.Append>
                        <Button variant="success" type="submit" onClick={(event) => this.handleSendMessage(socket, event)}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
                <ButtonToolbar>
                    <Button variant="success" onClick={this.props.handleLeaveRoomClick}>Leave Room</Button>
                    <UsersPopover />
                </ButtonToolbar>
            </>
        );
    }
}
 
export default ChatContainer;