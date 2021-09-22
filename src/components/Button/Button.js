import React from 'react';
import './Button.css';

export default function Button({ handleAdd, handleRemove, text, btnSm }) {
    return (
        <div>
            <button className={`custom-button ${btnSm}`} onClick={handleAdd || handleRemove}>{text}</button>
        </div >
    )
}
