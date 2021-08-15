import React from "react";

const InputControl = (props) => {
  return (
    <div className="input-control">
      <label>{props.label}</label>
      <span className="logo">
        <img src={props.imgSrc} alt="" />
      </span>
      <input type={props.type} onChange={props.onAddInfo} />
    </div>
  );
};
export default InputControl;
