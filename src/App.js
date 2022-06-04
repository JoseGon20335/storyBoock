import React from 'react';
import './App.css';
import Operaciones from './component/operaciones';

const App = () => {

  var input = document.getElementById("display-result");

  function clearCalculator() {
    input.value = "";
    input.focus();
  }

  function addToCalculator(value) {
    input.value += value;
    input.focus();
  }

  function resultCalculator() {
    input.value = eval(input.value);
    input.focus();
  }

  input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
      event.preventDefault();
      document.getElementById("button-equal").click();
    }
  });

  function advanceCalculator(funcName) {
    input.value = Math[funcName](input.value);
    input.focus();
  }

  return (
    <body>
    <section className="calculator">
      <div className="calculator__display">
        <input
          id="display-result"
          className="calculator__display-result"
          placeholder="0"
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
            onClick={Operaciones.call.}
          />
          <input
            type="button"
            name="button-round"
            className="calculator__keypad-row-button Advance"
            value="r"
            onClick={advanceCalculator('round')}
          />
          <input
            type="button"
            name="button-square"
            className="calculator__keypad-row-button Advance"
            value="&#8730;"
            onClick={advanceCalculator('sqrt')}
          />
          <input
            type="button"
            name="button-absolute"
            className="calculator__keypad-row-button Advance"
            value="|x|"
            onClick={advanceCalculator('abs')}
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-seven"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("7")}
          />
          <input
            type="button"
            name="button-eight"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("8")}
          />
          <input
            type="button"
            name="button-nine"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("9")}
          />
          <input
            type="button"
            name="button-plus"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("+")}
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-four"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("4")}
          />
          <input
            type="button"
            name="button-five"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("5")}
          />
          <input
            type="button"
            name="button-six"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("6")}
          />
          <input
            type="button"
            name="button-subtract"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("-")}
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-one"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("1")}
          />
          <input
            type="button"
            name="button-two"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("2")}
          />
          <input
            type="button"
            name="button-three"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("3")}
          />
          <input
            type="button"
            name="button-multiply"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("×")}
          />
        </div>
        <div className="calculator__keypad-row">
          <input
            type="button"
            name="button-zero"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("0")}
          />
          <input
            type="button"
            name="button-dot"
            className="calculator__keypad-row-button"
            onClick={addToCalculator(".")}
          />
          <input
            type="button"
            name="button-divide"
            className="calculator__keypad-row-button"
            onClick={addToCalculator("÷")}
          />
          <input
            type="button"
            name="button-equal"
            id="button-equal"
            className="calculator__keypad-row-button primary-button"
            value="="
            onClick={resultCalculator()}
          />
        </div>
      </div>
    </section>
  </body>
  );
}

export default App;
