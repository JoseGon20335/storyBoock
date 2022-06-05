/* eslint-disable react/prop-types */
import React from 'react'

function Absolute({onClick }) {
    return (
        <input
            type="button"
            name="button-absolute"
            className="calculator__keypad-row-button Advance"
            value="|x|"
            onClick={() => onClick('abs')}
        />
    )
}

export default Absolute