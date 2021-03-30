import React from 'react';

const Error = ({error}) => {

    return (
        <div className="err-box">
             {error} 
        </div>
    )
}

export default Error;

// Validate Error [IfEmpty && IfNotEmpty && IfUndefiedn]
// Create error type