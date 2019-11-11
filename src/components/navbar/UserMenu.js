import React from 'react';
import { Dropdown, DropdownButton} from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';

const UserMenu = ({ user, handleLogoutClick }) => {
    return (
        <DropdownButton variant="warning" title={user.display_name}>
            <LinkContainer to="/browse">
                <Dropdown.Item>Browse</Dropdown.Item>
            </LinkContainer>
            <Dropdown.Item onClick={handleLogoutClick}>Logout</Dropdown.Item>
        </DropdownButton>
    );
}
 
export default UserMenu;