/* eslint-disable react/prop-types */
import React from 'react'

function Division({ onClick }) {
    return (
        <input
            type="button"
            name="button-divide"
            className="calculator__keypad-row-button"
            onClick={() => onClick("/")}
            value="/"
        />
    )
}

export default Division