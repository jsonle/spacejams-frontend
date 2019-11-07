import React from 'react';

const MessageItem = ({ message }) => {
    return (
        <>
        <span className="message-user">{message.user.display_name}:</span> <span className="message-content">{message.content}</span>
        </>
    );
}
 
export default MessageItem;