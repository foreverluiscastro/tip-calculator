import { useState } from "react";

function App() {
  const [total, setTotal] = useState(0)
  const [percent, setPercent] =  useState(.20)

  console.log(`The total state is ${total}.`)
  console.log(`The percent state is ${percent}.`)

  function handleSubmit(e) {
    e.preventDefault()
    let input = e.target.children[0].children[0].value
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

  function sanitize(total, percentage) {
    let rawAmount = total * percentage
    if (rawAmount % 1 !== 0) {
      let sanitizedAmount = `${rawAmount}`.split(".")
      console.log(`${rawAmount}`.split("."))
      let newNum = sanitizedAmount[1].slice(0,2)
      console.log(newNum)
      let tip = [sanitizedAmount[0], newNum].join(".")
      return tip
    }
    return rawAmount
  }


  return (
    <main>
      <section>
        <h1>Tip Calculator</h1>
        <form onSubmit={handleSubmit}>
          <label>Total:
            <input
            type="text"
            name="total"
            placeholder="enter your total here"
            />
          </label>
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
            <p>Tip: ${sanitize(total, percent)}</p>
            <p>Total After Tip: ${parseInt(total) + parseFloat(sanitize(total, percent))}</p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
