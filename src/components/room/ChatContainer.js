import React, { Component, Fragment } from 'react';
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
            displayedMessages: {
                messages: []
            },
            newMessage: {
                user_id: props.currentUser.id,
                room_id: props.roomId,
                content: ""
            },
        }
    }

    componentDidMount() {
        const roomId = this.props.roomId;
        socket.emit('enter', `room_${roomId}`);

        socket.on('receiveMessage', message => {
            this.setState({
                displayedMessages: {
                    messages: [...this.state.displayedMessages.messages, message]
                }
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
        console.log(this.state.displayedMessages.messages)
        return (
            <>
                <MessageBox />
                <Form>
                    <Form.Control className="message-input" type="text" onChange={this.handleInputChange} value={this.state.newMessage.content} placeholder="Enter message"/>
                    <Button variant="success" type="submit" onClick={(event) => this.handleSendMessage(socket, event)}>Send</Button>
                </Form>
            </>
        );
    }
}
 
export default ChatContainer;