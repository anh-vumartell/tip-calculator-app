import React from "react";
import "../styles/main.scss";
import ErrorMsg from "./ErrorMsg";
const InputControl = (props) => {
  return (
    <div className="input-control">
      <label>{props.label}</label>
      {!props.isValid && <ErrorMsg />}
      <span className="logo">
        <img src={props.imgSrc} alt="" />
      </span>
      <input value={props.value} type={props.type} onChange={props.onAddInfo} />
    </div>
  );
};
export default InputControl;
