/* eslint-disable react/prop-types */
import React from 'react'

function Resta({onClick }) {
    return (
        <input
              type="button"
              name="button-subtract"
              className="calculator__keypad-row-button"
              onClick={() => onClick("-")}
        />
    )
}

export default Resta