import React, { useState } from 'react';
import './App.css';
import Number from './component/number';
import Clear from './component/clear';
import Raiz from './component/raiz';
import Suma from './component/suma';
import Multi from './component/multiplicacion';
import Round from './component/round';
import Absolute from './component/absolute';
import Resta from './component/resta';
import Igual from './component/igual';
import Division from './component/division';

const App = () => {

  var input = document.getElementById("display-result");

  const [resul, setResul] = useState("");

  const AddToCalculator = (e) => {
    setResul(resul.concat(e.target.value));
  }

  function ClearCalculator() {
    input.value = "";
    input.focus();
  }

  function ResultCalculator() {
    let valorVar = eval(resul);
    setResul(valorVar)
  }

  function AdvanceCalculator(funcName) {
    let valorVar = Math[funcName](resul);
    setResul(valorVar)
  }

  return (
    <div>
      <section className="calculator">
        <div className="calculator__display">
        <input type="text" value={resul} />
        </div>
        <div className="calculator__keypad">
          <div className="calculator__keypad-row">
            <Clear onClick={ClearCalculator}/>
            <Round onClick={AdvanceCalculator}/>
            <Raiz onClick={AdvanceCalculator}/>
            <Absolute onClick={AdvanceCalculator}/>
          </div>
          <div className="calculator__keypad-row">
            <Number value='7' onClick={AddToCalculator}/>
            <Number value='8' onClick={AddToCalculator}/>
            <Number value='9' onClick={AddToCalculator}/>
            <Suma onClick={AddToCalculator}/>
          </div>
          <div className="calculator__keypad-row">
            <Number value='4' onClick={AddToCalculator}/>
            <Number value='5' onClick={AddToCalculator}/>
            <Number value='6' onClick={AddToCalculator}/>
            <Resta onClick={AddToCalculator}/>
          </div>
          <div className="calculator__keypad-row">
            <Number value='1' onClick={AddToCalculator}/>
            <Number value='2' onClick={AddToCalculator}/>
            <Number value='3' onClick={AddToCalculator}/>
            <Multi onClick={AddToCalculator}/>
          </div>
          <div className="calculator__keypad-row">
            <Number value='0' onClick={AddToCalculator}/>
            <Number value='.' onClick={AddToCalculator}/>
            <Division onClick={AddToCalculator}/>
            <Igual onClick={ResultCalculator}/>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
