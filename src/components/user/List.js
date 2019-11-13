import React from 'react';
import UserTile from './Tile';

function UsersList(props) {
    
    const getUsers = () => {
        const { users } = props;
        if (!users.length) {
            return getMessage();
        }

        return users.map(user => <UserTile key={user.id} user={user} />);
    };

    const getMessage = () => {
        return (
            <h3>List is empty</h3>
        );    
    }

    return (
        <div className="row users-list">
            { getUsers() }
        </div>
    );
}

export default UsersList;