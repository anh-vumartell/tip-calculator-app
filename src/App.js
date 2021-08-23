import React, { useState } from "react";
import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import "./styles/main.scss";
import InputControl from "./components/InputControl";
import TipResult from "./components/TipResult";
import Header from "./components/Header";
import Button from "./components/Button";

function App() {
  const percentages = [5, 10, 15, 25, 50];
  const [billInput, setBillInput] = useState("");
  const [personNumInput, setPersonNumInput] = useState("");
  const [isValid, setIsValid] = useState(true);
  // const [selectedPercent, setSelectedPercent] = useState();
  const [inputPercent, setInputPercent] = useState("");

  const updatePercentage = (e) => {
    e.persist();
    setInputPercent(e.target.value);
    console.log(inputPercent);
    // setSelectedPercent(e.target.value);
    // console.log(selectedPercent);
  };
  //FUnction to update bill
  const updateBill = (e) => {
    if (+e.target.value <= 0) {
      setIsValid(false);
    } else {
      setBillInput(e.target.value);
      setIsValid(true);
    }
  };

  //Function to update number of persons
  const updatePersonNum = (e) => {
    if (+e.target.value <= 0) {
      setIsValid(false);
    } else {
      setPersonNumInput(e.target.value);
      setIsValid(true);
    }
  };

  const tipAmountPer = (+billInput * +inputPercent) / 100 / +personNumInput;
  const totalPer =
    +billInput !== 0 && +personNumInput !== 0
      ? +billInput / +personNumInput + tipAmountPer
      : 0;

  //Function to render list of buttons
  const renderBtns = percentages.map((unit, i) => (
    <button
      type="button"
      key={i + 1}
      className="btn-percent numbers"
      value={unit}
      onClick={updatePercentage}
    >
      {unit}%
    </button>
  ));

  //Function to reset the state of the app
  const resetAllInputs = () => {
    setBillInput("");
    setInputPercent("");
    setPersonNumInput("");
  };
  return (
    <div className="app-container">
      <Header />

      <div className="app-content">
        <div className="input-container">
          <InputControl
            isValid={isValid}
            label="Bill"
            imgSrc={dollar}
            type="text"
            required
            value={billInput}
            onAddInfo={updateBill}
          />

          <div className="input-percent">
            <label>Select Tip %</label>
            <div className="buttons-container">
              {renderBtns}
              <input
                type="text"
                placeholder="Custom"
                value={inputPercent}
                onChange={updatePercentage}
              />
              <span className="percent">%</span>
            </div>
          </div>

          <InputControl
            isValid={isValid}
            label="Number of People"
            imgSrc={personIcon}
            type="text"
            value={personNumInput}
            onAddInfo={updatePersonNum}
            required
          />
        </div>

        <div className="result-container">
          <TipResult header="Tip Amount" result={tipAmountPer} />

          <TipResult header="Total" result={totalPer} />

          <Button type="button" onClick={resetAllInputs}>
            Reset
          </Button>
        </div>
      </div>
      <div className="contributor">
        <p>
          Challenge by{" "}
          <a href="https://www.frontendmentor.io/solutions">FrontendMentor</a>.
          Coded by{" "}
          <a href="https://anh-vumartell.netlify.app/">Ngoc Anh Vu-Martell</a>
        </p>
      </div>
    </div>
  );
}

export default App;
