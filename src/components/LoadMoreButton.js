import React from 'react';

class LoadMoreButton extends React.Component {
    render() {
        return (
            <button type="button" 
                    className="btn btn-primary"
                    onClick={this.props.onClick}
            >
                Load new user
            </button>
        );
    }
}

export default LoadMoreButton;