import React from 'react';
import './Button.css';

export default function Button({ handleClick, handleChange, text, btnSm }) {
    return (
        <div>
            <button className={`custom-button ${btnSm}`} onClick={handleClick || handleChange}>{text}</button>
        </div >
    )
}
