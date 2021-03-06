import React from 'react';

const MessageItem = ({ message }) => {
    return (
        <p>
            { message.user_name && <span className="message-user">{message.user_name}: </span> }
            <span className="message-content">{message.content}</span>
        </p>
    );
}
 
export default MessageItem;