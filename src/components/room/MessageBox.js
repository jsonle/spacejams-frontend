import React, { Component } from 'react';
import MessageItem from './MessageItem';

class MessageBox extends Component {
    state = {  }

    displayMessages = () => {
        return this.props.messages.map((message, index) => <MessageItem message={message} key={index}/>)
    }

    render() { 
        return (
            <div className="chat-box">
                {this.displayMessages()}
            </div>
        );
    }
}
 
export default MessageBox;
 