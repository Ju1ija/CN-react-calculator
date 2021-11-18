import { useState } from 'react';
import { evaluate } from 'mathjs';
import './App.css';

function App() {
  const [input, setInput] = useState("");
  let currentInputField = input;
  const changeHandler = (event) => {
    setInput(event.target.value);
  }
  const inputHandler = (e) => {
    let currentElement = e;
    currentInputField += currentElement;
    setInput(currentInputField);
  }
  const resultHandler = (input) => {
    const currentInput = input;
    const result = Number(evaluate(currentInput).toFixed(3));
    setInput(result);
  }
  const deleteHandler = (input) => {
    if (typeof input === "string") {
      let inputField = input;
      inputField = inputField.slice(0, -1);
      setInput(inputField);
    } else {
      setInput("");
    }
  }

  return (
    <div className="calculator">
      <div className="input-section">
        <input type="text" onChange={changeHandler} placeholder="0" autocomplete="off" value={input} />
      </div>
      <div className="buttons-section">
        <div className="numbers-section">
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
          <Button icon="x" onClickEvent={() => inputHandler("*")} />
          <Button icon="/" onClickEvent={() => inputHandler("/")} />
        </div>
      </div>
    </div>
  );
}

const Button = (props) => {
  return <button id={props.idName} onClick={props.onClickEvent}>{props.icon}</button>
}

export default App;
