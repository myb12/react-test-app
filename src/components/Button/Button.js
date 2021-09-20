import React from 'react';
import './Button.css';

export default function Button({ handleClick, text }) {
    return (
        <div>
            <button className="custom-button" onClick={handleClick}>{text}</button>
        </div>
    )
}
