/* eslint-disable react/prop-types */
import React from 'react'

function Igual( { onClick } ) {
    return (
        <input
            type="button"
            name="button-equal"
            id="button-equal"
            className="calculator__keypad-row-button primary-button"
            value="="
            onClick={() => onClick()}
        />
    )
}

export default Igual