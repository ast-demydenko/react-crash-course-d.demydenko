import React from 'react';

class CancelRequestButton extends React.Component {

    handleClick = () => {
        const { request, message } = this.props;

        request.cancel(message);
    }

    render() {
        return (
            <button type="button" 
                    className="btn btn-danger"
                    onClick={this.handleClick}
            >
                Cancel loading
            </button>
        );
    }
}

export default CancelRequestButton;