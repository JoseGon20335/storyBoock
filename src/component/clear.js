/* eslint-disable react/prop-types */
import React from 'react'

function Clear({ onClick }) {
    return (
        <input
            type="button"
            id="button-clear"
            name="button-clear"
            className="calculator__keypad-row-button primary-button"
            onClick={() => onClick('Clear')}
            value="C"
        />
    )
}

export default Clear