import React from 'react';

const Button = ({handler, text}) => {
    return (
        <div className="bg-indigo-600">
            <button onClick={handler}>
                {text}
            </button>
        </div>
    )
};

export default Button;
