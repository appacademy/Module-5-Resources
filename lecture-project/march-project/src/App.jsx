import React, { useState } from "react";
import Cards from './components/Cards'
import "./App.css";



const testElement = document.createElement("div")

window.React = React
window.testElement = testElement


function App() {
  const [state, setState] = useState(0);
  return (
    <div className="App">
      <header className="App-header">
        <h1>howdy there</h1>
        <h3>count: {state}</h3>
        <button
          onClick={() => {
            setState(state + 1);
          }}
          >
          plus
        </button>
        <button
          onClick={() => {
            testElement.addEventListener("click", ((e) => {})())
            setState(state - 1);
          }}
        >
          minus
        </button>
      </header>
      <br />
      <Cards data={{ key: "value" }} />
    </div>
  );
}

export default App;

