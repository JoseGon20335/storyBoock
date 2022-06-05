/* eslint-disable react/prop-types */
import React from 'react'

function Multi({onClick }) {
    return (
        <input
            type="button"
            name="button-multiply"
            className="calculator__keypad-row-button"
            onClick={() => onClick("×")}
            value="x"
        />
    )
}

export default Multi