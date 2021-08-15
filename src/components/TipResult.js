import React from "react";

const TipResult = (props) => {
  return (
    <div className="tip-result">
      <div className="result-header">
        <h4>{props.header}</h4>
        <p>/ person</p>
      </div>
      <div className="numbers result">
        ${!props.result ? 0 : props.result.toFixed(2)}
      </div>
    </div>
  );
};
export default TipResult;
