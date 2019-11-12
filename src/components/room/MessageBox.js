import React, { Component } from 'react';
import MessageItem from './MessageItem';

class MessageBox extends Component {
    constructor(){
        super();
        this.state = {

        }
        this.chatRef = React.createRef();
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.messages.length !== prevProps.messages) {

        }
    }

    scrollToBottom = () => {
        this.chatRef.current.scrollTop = this.chatRef.current.scrollHeight;
    }

    displayMessages = () => {
        return this.props.messages.map((message, index) => <MessageItem message={message} key={index}/>)
    }

    render() { 
        return (
            <div className="chat-box" ref={this.chatRef}>
                {this.displayMessages()}
            </div>
        );
    }
}
 
export default MessageBox;
 