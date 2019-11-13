import React from 'react';

function LoadMoreButton(props) {
    const { isLoading, onClick } = props;
    
    return (
        <button type="button" 
                className="btn btn-primary btn-load-more"
                onClick={onClick}
                disabled={isLoading}
        >
            { isLoading 
                ? 'User is loading...' 
                : 'Load new user' 
            }
        </button>
    );
}

export default LoadMoreButton;