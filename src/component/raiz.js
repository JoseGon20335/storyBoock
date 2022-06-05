/* eslint-disable react/prop-types */
import React from 'react'

function Raiz({onClick }) {
    return (
        <input
            type="button"
            name="button-square"
            className="calculator__keypad-row-button Advance"
            value="sqrt"
            onClick={() => onClick('sqrt')}
        />
    )
}

export default Raiz