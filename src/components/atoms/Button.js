import React from 'react';





const Button = ({handler, text}) => {
    let style = "";
    return (
        <div className={style}>
            <button onClick={handler}>
                {text}
            </button>
        </div>
    )
};

export default Button;
