/* eslint-disable react/prop-types */
import React from 'react'

function Number({ value, onClick }) {
    return (
        <input
            type="button"
            name={value}
            className="calculator__keypad-row-button"
            onClick={() => onClick(value)}
            value={value}
        />
    )
}

export default Number