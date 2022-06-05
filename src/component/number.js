/* eslint-disable react/prop-types */
import React from 'react'

function Number({ x, onClick }) {
    return (
        <input
            type="button"
            name={x}
            className="calculator__keypad-row-button"
            onClick={() => onClick(x)}
        >
            {x}
        </input>
    )
}

export default Number