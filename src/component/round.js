/* eslint-disable react/prop-types */
import React from 'react'

function Round({ onClick }) {
    return (
        <input
            type="button"
            id="button-clear"
            name="button-clear"
            className="calculator__keypad-row-button primary-button"
            onClick={() => onClick('round')}
            value="r"
        />
    )
}

export default Round