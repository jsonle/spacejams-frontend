import React from 'react';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button';
import Popover from 'react-bootstrap/Popover';
import PopoverTitle from 'react-bootstrap/PopoverTitle';
import PopoverContent from 'react-bootstrap/PopoverContent'

const UsersPopover = () => {
    return (
        <OverlayTrigger trigger="click"
         placement="bottom"
         overlay={
             <Popover id="users-list">
                 <Popover.Title as="h3">Users currently in room</Popover.Title>
                 <Popover.Content>
                    Users List
                 </Popover.Content>
             </Popover>
         }>
             <Button variant="success">Users</Button>
         </OverlayTrigger>
    );
}
 
export default UsersPopover;