import React, {useState } from 'react';
import './App.css';

const App = () => {

  const [size, setSize] = useState("");
  const [font, setFont] = useState("");
  const [back, setBack] = useState("");
  // const [resul, setResul] = useState("");

  const handleClick = (e) => {
    console.log(e)
  }

  return (
    <body>
    <section className="calculator">
      <div className="calculator__display">
        <input
          id="display-result"
          className="calculator__display-result"
          placeholder="0"
          oninput="this.value = this.value.replace(/[^(0-9)(-/*+)]/g, '').replace(/(\..*?)\..*/g, '$1').replace(/^0[^.]/, '0');"
          autofocus
          autocomplete="off"
        />
      </div>
      <div className="calculator__keypad">
        <div className="calculator__keypad-row">
          <input
            type="button"
            id="button-clear"
            name="button-clear"
            className="calculator__keypad-row-button primary-button"
            value="C"
            onclick="clearCalculator()"
          />
          <input
            type="button"
            name="button-round"
            className="calculator__keypad-row-button Advance"
            value="r"
            onclick="advanceCalculator('round')"
          />
          <input
            type="button"
            name="button-square"
            className="calculator__keypad-row-button Advance"
            value="&#8730;"
            onclick="advanceCalculator('sqrt')"
          />
          <input
            type="button"
            name="button-absolute"
            className="calculator__keypad-row-button Advance"
            value="|x|"
            onclick="advanceCalculator('abs')"
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-seven"
            className="calculator__keypad-row-button"
            value="7"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-eight"
            className="calculator__keypad-row-button"
            value="8"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-nine"
            className="calculator__keypad-row-button"
            value="9"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-plus"
            className="calculator__keypad-row-button"
            value="+"
            onclick="addToCalculator(value)"
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-four"
            className="calculator__keypad-row-button"
            value="4"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-five"
            className="calculator__keypad-row-button"
            value="5"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-six"
            className="calculator__keypad-row-button"
            value="6"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-subtract"
            className="calculator__keypad-row-button"
            value="-"
            onclick="addToCalculator(value)"
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-one"
            className="calculator__keypad-row-button"
            value="1"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-two"
            className="calculator__keypad-row-button"
            value="2"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-three"
            className="calculator__keypad-row-button"
            value="3"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-multiply"
            className="calculator__keypad-row-button"
            value="×"
            onclick="addToCalculator(value)"
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-zero"
            className="calculator__keypad-row-button"
            value="0"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-dot"
            className="calculator__keypad-row-button"
            value="."
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-divide"
            className="calculator__keypad-row-button"
            value="÷"
            onclick="addToCalculator(value)"
          />
          <input
            type="button"
            name="button-equal"
            id="button-equal"
            className="calculator__keypad-row-button primary-button"
            value="="
            onclick="resultCalculator()"
          />
        </div>
      </div>
    </section>
  </body>
  );
}

export default App;
