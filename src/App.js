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

  const [resul, setResul] = useState("");

  const AddToCalculator = (value) => {
    console.log(value)
    setResul(resul.concat(value));
  }

  function ClearCalculator() {
    let valorVar = "";
    setResul(valorVar)
  }

  function ResultCalculator() {
    console.log("igual",resul)
    let valorVar = eval(resul);
    setResul(valorVar)
  }

  function AdvanceCalculator(value) {
    let valorVar = Math[value](resul);
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
            <Round value="round" onClick={AdvanceCalculator}/>
            <Raiz value="sqrt" onClick={AdvanceCalculator}/>
            <Absolute value="abs" onClick={AdvanceCalculator}/>
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
