import React from 'react';
import UserTile from './Tile';

class UsersList extends React.Component {
    
    getUsers = () => {
        const { users } = this.props;
        if (!users.length) {
            return this.getMessage();
        }

        return users.map(user => <UserTile key={user.id} user={user} />);
    };

    getMessage() {
        return (
            <h3>List is empty</h3>
        );    
    }

    render() {
        return (
            <div className="row users-list">
                { this.getUsers() }
            </div>
        );
    }
}

export default UsersList;