import React from "react";
import "../styles/main.scss";
import ErrorMsg from "./ErrorMsg";
const InputControl = (props) => {
  return (
    <div className={`input-control ${!props.isValid}? "invalid": ""`}>
      <label htmlFor={props.label}>{props.label}</label>
      {!props.isValid && <ErrorMsg />}
      <span className="logo">
        <img src={props.imgSrc} alt="" />
      </span>
      <input
        value={props.value}
        type={props.type}
        placeholder="0"
        onChange={props.onAddInfo}
      />
    </div>
  );
};
export default InputControl;
