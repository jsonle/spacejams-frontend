import React, { Component } from 'react';
import socketIOClient from "socket.io-client";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import ButtonToolbar from 'react-bootstrap/ButtonToolbar';
import InputGroup from 'react-bootstrap/InputGroup';
import MessageBox from './MessageBox';
import UsersPopover from './UsersPopover';
const endpoint = "https://spacejams.herokuapp.com/"
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
            fetch(`https://blooming-meadow-49798.herokuapp.com/rooms/${roomId}`)
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

        socket.on('leaveRoom', message => {
            fetch(`https://blooming-meadow-49798.herokuapp.com/rooms/${roomId}`)
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
        fetch('https://blooming-meadow-49798.herokuapp.com/messages', config)
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

    displayUsers = () => {
        const nameArray = [];
        this.state.currentUsers.map(user => {
            return nameArray.push(user.display_name);
        })
        return nameArray.join(', ');
    }

    componentWillUnmount() {
        const user = JSON.parse(localStorage.getItem("user"));
        socket.emit('leave', user)

        let config = {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                user: {
                    id: this.props.currentUser.id,
                    room_id: null
                }
            })
        }

        fetch(`https://blooming-meadow-49798.herokuapp.com/users/${this.props.currentUser.id}`, config)
        .then( resp => resp.json())
        .then( updatedUser => {
            localStorage.clear();
            localStorage.setItem("user", JSON.stringify(updatedUser)) // Updates user in local storage
        })

        
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
                        <Button variant="warning" type="submit" onClick={(event) => this.handleSendMessage(socket, event)}>Send</Button>
                    </InputGroup.Append>
                </InputGroup>
                <Button id="leave-room-btn" variant="warning" onClick={this.props.handleLeaveRoomClick}>Leave Room</Button>
                <UsersPopover currentUsers={this.state.currentUsers} displayUsers={this.displayUsers}/>
            </>
        );
    }
}
 
export default ChatContainer;