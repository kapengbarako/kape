import React from 'react';
import './Button.css';


function handleClick(e) {
    alert('The button was clicked.');
}

function Button() {
    return (
        <div className="button">
            <button onClick={handleClick}>
                Alert Me!
            </button>
        </div>
    );
}

export default Button;
