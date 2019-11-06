import React from 'react';

class LoadMoreButton extends React.Component {
    render() {
        const { isLoading } = this.props;
        return (
            <button type="button" 
                    className="btn btn-primary btn-load-more"
                    onClick={this.props.onClick}
                    disabled={isLoading}
            >
                { isLoading 
                    ? 'User is loading...' 
                    : 'Load new user' 
                }
            </button>
        );
    }
}

export default LoadMoreButton;