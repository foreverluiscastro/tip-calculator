import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0.0)
  const [percent, setPercent] =  useState(.20)

  function handleSubmit(e) {
    e.preventDefault()
    let input = e.target.children[0].value
    setTotal(input)
  }

  function handleChange(e) {
    console.log(e.target.innerText)
    
    if (e.target.innerText === "↑") {
      console.log("Arrow Up!")
      setPercent(percent + .01)
    } else {
      console.log("Arrow Down!")
      setPercent(percent - .01)
    }
  }

  function calulateTip(total, percentage) {
    let rawTip = total * percentage;
    let roundedTip = Math.round(rawTip * 100) / 100; // Round the tip to two decimal places
    return roundedTip.toFixed(2); // Return the tip amount as a string with exactly two decimal places
  }

  function calculateTotalAfterTip(total, tip) {
    let totalAfterTip = parseFloat(total) + parseFloat(tip);
    totalAfterTip = totalAfterTip.toFixed(2); // Round the total after tip to two decimal places
  
    return totalAfterTip;
  }

  const tip = calulateTip(total, percent);
  const totalAfterTip = calculateTotalAfterTip(total, tip)

  return (
    <main>
      <section>
        <h1>Tip Calculator</h1>
        <form onSubmit={handleSubmit}>
          <input
          type="text"
          name="total"
          placeholder="enter your total here"
          />
          <button type="submit">Caluclate</button>
        </form>
      </section>
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
    </main>
  );
}

export default App;
