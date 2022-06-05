/* eslint-disable react/prop-types */
import React from 'react'

function Suma({onClick }) {
    return (
        <input
              type="button"
              name="button-plus"
              className="calculator__keypad-row-button"
              onClick={() => onClick("+")}
        />
    )
}

export default Suma