import React from 'react';

class UserTile extends React.Component {
    
    getFullname() {
        const { firstName, lastName } = this.props.user;
        return `${firstName} ${lastName}`;
    }
    
    render() {
        const { image } = this.props.user;
        return (
            <div className="col-3">
                <div className="card">
                    <img className="card-img-top" src={image} alt="Avatar" />
                    <div className="card-body">
                        <h5 className="card-title">{ this.getFullname() }</h5>
                        <p className="card-text"></p>
                    </div>
                </div>  
            </div>
        );
    }
}

export default UserTile;