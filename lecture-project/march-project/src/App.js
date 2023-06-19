import logo from "./logo.svg";
import { useState } from "react";
import "./App.css";

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
            setState(state - 1);
          }}
        >
          minus
        </button>
      </header>
    </div>
  );
}

export default App;
