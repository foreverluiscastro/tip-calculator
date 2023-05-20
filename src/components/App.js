import { useState } from "react";
import TipForm from "./TipForm";
import CalculatorContainer from "./CalculatorContainer";
import Footer from "./Footer";

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
      <TipForm handleSubmit={handleSubmit}/>
      <CalculatorContainer handleChange={handleChange} percent={percent} tip={tip} totalAfterTip={totalAfterTip}/>
      <Footer/>
    </main>
  );
}

export default App;
