import React from 'react'

function TipForm({ handleSubmit }) {
  return (
    <section>
    <h1>Tip Calculator</h1>
    <form onSubmit={handleSubmit}>
      <input
      type="text"
      name="total"
      placeholder="enter your total here"
      inputMode="numeric"
      />
      <button type="submit">Calculate</button>
    </form>
  </section>
  )
}

export default TipForm