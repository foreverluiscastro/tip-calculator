import React from "react";

function CalculatorContainer({ handleChange , percent , tip , totalAfterTip}) {
  return (
    <div className="percentage-results-container">
      <div>
        <div className="percentage-div">
          <h1>{Math.round(percent * 100)}%</h1>
          <div className="button-container">
            <button onClick={handleChange}>↑</button>
            <button onClick={handleChange}>↓</button>
          </div>
        </div>
        <div className="tip-results">
          <p>Tip: ${tip}</p>
          <p>Total After Tip: ${totalAfterTip}</p>
        </div>
      </div>
    </div>
  );
}

export default CalculatorContainer;
