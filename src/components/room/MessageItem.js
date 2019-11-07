import React from 'react';

const MessageItem = ({ message }) => {
    return (
        <p><span className="message-user">{message.user.display_name}: </span> <span className="message-content">{message.content}</span></p>
    );
}
 
export default MessageItem;