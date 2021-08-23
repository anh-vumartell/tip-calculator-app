import React from "react";
import logo from "../images/logo.svg";
import "../styles/main.css";
const Header = () => {
  return (
    <div className="app-header">
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  );
};
export default Header;
