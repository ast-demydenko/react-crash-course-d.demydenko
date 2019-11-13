import React from 'react';

function CancelRequestButton(props) {

    const handleClick = () => {
        const { request, message } = props;

        request.cancel(message);
    }

    return (
        <button type="button" 
                className="btn btn-danger"
                onClick={handleClick}
        >
            Cancel loading
        </button>
    );
}

export default CancelRequestButton;