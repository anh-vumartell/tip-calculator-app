import React, { useState } from "react";
import logo from "./images/logo.svg";
import dollar from "./images/icon-dollar.svg";
import personIcon from "./images/icon-person.svg";
import "./styles/main.scss";

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
  return (
    <div className="app-container">
      <div className="app-header">
        <img src={logo} className="App-logo" alt="logo" />
      </div>

      <div className="app-content">
        <div className="input-control">
          <label>Bill</label>
          <span>
            <img src={dollar} alt="" />
          </span>
          <input type="text" value={billInput} onChange={updateBill} />
        </div>
        <div clasName="tip-input">
          <label>Select Tip %</label>
          <div className="buttons-container">
            {renderBtns}
            <input
              type="text"
              placeholder="Custom"
              value={selectedPercent}
              onChange={updatePercentage}
            />
          </div>
        </div>

        <div className="input-control">
          <label>Number of People</label>
          <span>
            <img src={personIcon} alt="" />
          </span>
          <input
            type="number"
            min={1}
            value={personNumInput}
            onChange={updatePersonNum}
          />
        </div>

        <div className="result-container">
          <div className="result-tip">
            <div className="result-header">
              <h4>Tip Amount</h4>
              <p>/ person</p>
            </div>
            <div className="numbers result">
              ${!tipAmountPer ? 0 : tipAmountPer.toFixed(2)}
            </div>
          </div>
          <div className="result-tip">
            <div className="result-header">
              <h4>Total</h4>
              <p>/ person</p>
            </div>
            <div className="numbers result">
              ${!totalPer ? 0 : totalPer.toFixed(2)}
            </div>
          </div>
          <button className="btn-reset">Reset</button>
        </div>
      </div>
    </div>
  );
}

export default App;
