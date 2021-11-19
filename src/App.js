import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  const [isResultSet, setResultState] = useState(false);

  const inputHandler = (char) => setValidatedInput(input + char);

  const setValidatedInput = (val) => {
    const regex = /(\d+[%]?[+-/*]?)+$/;
    const isInputValid = regex.test(val);
    if (isInputValid) {
      if (!isResultSet) {
        setInput(val);
      } else if (isMathOp(lastCharOf(val)) || lastCharOf(val) == "%") {
        setInput(val);
        setResultState(false);
      } else {
        setInput(lastCharOf(val));
        setResultState(false);
      }
    }
  }

  const resultHandler = (val) => {
    if (!isMathOp(lastCharOf(val)) && val !== "") {
      const result = Number(evaluate(val).toFixed(3));
      setInput(result);
      setResultState(true);
    }
  }

  const deleteHandler = (val) => {
    if (typeof val === "string") {
      setInput(val.slice(0, -1));
    } else {
      setInput("");
    }
  }

  const isMathOp = (char) => "+-*/".includes(char);
  const lastCharOf = (str) => str[str.length - 1];

  return (
    <div className="calculator">
      <div className="input-section">
        <input type="text" onChange={(e) => setValidatedInput(e.target.value)} placeholder="0" autocomplete="off" value={input} />
      </div>
      <div className="buttons-section">
        <div>
          <div className="grey-section">
            <Button icon="C" idName="reset-button" onClickEvent={() => setInput("")} />
            <Button icon="%" onClickEvent={() => inputHandler("%")} />
          </div>
          <div className="white-section">
            <Button icon="0" onClickEvent={() => inputHandler("0")} />
            <Button icon="." onClickEvent={() => inputHandler(".")} />
            <Button icon="DEL" onClickEvent={() => deleteHandler(input)} />
            <Button icon="1" onClickEvent={() => inputHandler("1")} />
            <Button icon="2" onClickEvent={() => inputHandler("2")} />
            <Button icon="3" onClickEvent={() => inputHandler("3")} />
            <Button icon="4" onClickEvent={() => inputHandler("4")} />
            <Button icon="5" onClickEvent={() => inputHandler("5")} />
            <Button icon="6" onClickEvent={() => inputHandler("6")} />
            <Button icon="7" onClickEvent={() => inputHandler("7")} />
            <Button icon="8" onClickEvent={() => inputHandler("8")} />
            <Button icon="9" onClickEvent={() => inputHandler("9")} />
          </div>
        </div>
        <div className="orange-section">
          <Button icon="=" idName="equal" onClickEvent={() => resultHandler(input)} />
          <Button icon="+" onClickEvent={() => inputHandler("+")} />
          <Button icon="-" onClickEvent={() => inputHandler("-")} />
          <Button icon="&#215;" onClickEvent={() => inputHandler("*")} />
          <Button icon="&#247;" onClickEvent={() => inputHandler("/")} />
        </div>
      </div>
    </div>
  );
}

const Button = (props) => {
  return <button id={props.idName} onClick={props.onClickEvent}>{props.icon}</button>
}

export default App;
