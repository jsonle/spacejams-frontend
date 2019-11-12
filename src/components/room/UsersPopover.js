import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';

const UsersPopover = ({ currentUsers, displayUsers }) => {
    return (
        <OverlayTrigger trigger="click"
         placement="top"
         overlay={
             <Popover id="users-list">
                 <Popover.Title as="h3">Users currently in room</Popover.Title>
                 <Popover.Content>
                    {displayUsers()}
                 </Popover.Content>
             </Popover>
         }>
             <Button variant="warning"> Users listening({currentUsers.length})</Button>
         </OverlayTrigger>
    );
}
 
export default UsersPopover;