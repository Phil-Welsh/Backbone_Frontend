import React from 'react';
import './Button.css'

const Button = (props) => {

    return (
        <div className="comment-button">
            <button onClick={props.onClick}>
                {props.text}
            </button>
        </div>
    );

}

export default Button;
