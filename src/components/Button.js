import React from "react";
import "../styles/main.css";
const Button = (props) => {
  return (
    <button type="button" className="btn-reset" onClick={props.onClick}>
      {props.children}
    </button>
  );
};
export default Button;
