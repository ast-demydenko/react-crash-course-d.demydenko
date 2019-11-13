import React from 'react';

function UserTile(props) {
    const { image } = props.user;

    const getFullname = () => {
        const { firstName, lastName } = props.user;
        return `${firstName} ${lastName}`;
    }
    
    return (
        <div className="col-3">
            <div className="card">
                <img className="card-img-top" src={image} alt="Avatar" />
                <div className="card-body">
                    <h5 className="card-title">{ getFullname() }</h5>
                    <p className="card-text"></p>
                </div>
            </div>  
        </div>
    );
}

export default UserTile;