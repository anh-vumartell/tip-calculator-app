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
  const [bill, setBill] = useState("");
  const [people, setPeople] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [selectedPercent, setSelectedPercent] = useState();
  const [customPercent, setCustomPercent] = useState("");
  const [isSelected, setIsSelected] = useState(true);

  const updateCustomPercentage = (e) => {
    e.persist();
    setCustomPercent(+e.target.value);

    console.log(customPercent);
  };
  const updateSelectedPercentage = (e) => {
    setSelectedPercent(+e.target.value);
    setIsSelected(isSelected);
    console.log(isSelected);
  };
  //FUnction to update bill
  const updateBill = (e) => {
    if (+e.target.value <= 0) {
      setIsValid(false);
    } else {
      setBill(e.target.value);
      setIsValid(true);
    }
  };

  //Function to update number of persons
  const updatePersonNum = (e) => {
    if (+e.target.value <= 0) {
      setIsValid(false);
    } else {
      setPeople(+e.target.value);
      setIsValid(true);
    }
  };

  const tipCalcHandler = () => {
    //if clause guard inputs
    if (
      isNaN(bill) ||
      isNaN(people) ||
      !isFinite(bill / people) ||
      bill / people === 0 ||
      isNaN(customPercent)
    ) {
      return (0.0).toFixed(2);
    }
    if (!customPercent) {
      return (bill * selectedPercent) / 100 / people;
    } else {
      return (bill * customPercent) / 100 / people;
    }
  };
  const totalCalcHandler = () => {
    if (
      isNaN(bill) ||
      isNaN(people) ||
      !isFinite(bill / people) ||
      bill / people === 0 ||
      isNaN(customPercent)
    ) {
      return (0.0).toFixed(2);
    }
    return (bill / people + parseFloat(tipCalcHandler())).toFixed(2);
  };

  //Function to render list of buttons
  const renderBtns = percentages.map((unit, i) => (
    <button
      type="button"
      key={i + 1}
      value={unit}
      isselected={isSelected.toString()}
      className={`btn-percent ${isSelected ? "is-selected" : ""} numbers`}
      onClick={updateSelectedPercentage}
    >
      {unit}%
    </button>
  ));

  //Function to reset the state of the app
  const resetAllInputs = () => {
    setBill("");
    setCustomPercent("");
    setPeople("");
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
            value={bill}
            onAddInfo={updateBill}
          />

          <div className="input-percent">
            <label>Select Tip %</label>
            <div className="buttons-container">
              {renderBtns}
              <input
                type="text"
                placeholder="Custom"
                value={customPercent}
                onChange={updateCustomPercentage}
              />
              <span className="percent">%</span>
            </div>
          </div>

          <InputControl
            isValid={isValid}
            label="Number of People"
            imgSrc={personIcon}
            type="text"
            value={people}
            onAddInfo={updatePersonNum}
            required
          />
        </div>

        <div className="result-container">
          <TipResult header="Tip Amount" result={tipCalcHandler} />

          <TipResult header="Total" result={totalCalcHandler} />

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
