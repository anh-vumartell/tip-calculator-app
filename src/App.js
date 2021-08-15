import React, { useState } from "react";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import "./styles/main.scss";
import InputControl from "./components/InputControl";
import TipResult from "./components/TipResult";

function App() {
  const percentages = [5, 10, 15, 25, 50];
  const [billInput, setBillInput] = useState(0);
  const [personNumInput, setPersonNumInput] = useState(1);
  const [selectedPercent, setSelectedPercent] = useState();
  const [inputPercent, setInputPercent] = useState("");

  const updatePercentage = (e) => {
    e.persist();
    setInputPercent(e.target.value);
    console.log(inputPercent);
    setSelectedPercent(e.target.value);
    console.log(selectedPercent);
  };
  //FUnction to update bill
  const updateBill = (e) => {
    setBillInput(e.target.value);
  };

  //Function to update number of persons
  const updatePersonNum = (e) => {
    setPersonNumInput(e.target.value);
  };

  const tipAmountPer = (+billInput * +selectedPercent) / 100 / +personNumInput;
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
    setBillInput(0);
    setInputPercent(0);
    setPersonNumInput(1);
    setSelectedPercent(0);
  };
  return (
    <div className="app-container">
      <div className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="app-content">
        <div className="input-container">
          <InputControl
            label="Bill"
            imgSrc={dollar}
            type="text"
            value={billInput}
            onAddInfo={updateBill}
          />

          <div>
            <label>Select Tip %</label>
            <div className="buttons-container">
              {renderBtns}
              <input
                type="text"
                placeholder="Custom"
                value={selectedPercent}
                onChange={updatePercentage}
              />
              <span className="percent">%</span>
            </div>
          </div>

          <InputControl
            label="Number of People"
            imgSrc={personIcon}
            type="number"
            value={personNumInput}
            onAddInfo={updatePersonNum}
            min={1}
          />
        </div>

        <div className="result-container">
          <TipResult header="Tip Amount" result={tipAmountPer} />

          <TipResult header="Total" result={totalPer} />

          <button type="button" className="btn-reset" onClick={resetAllInputs}>
            Reset
          </button>
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
