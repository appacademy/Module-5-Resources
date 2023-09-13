import { useState } from "react";
import State from "./components/State";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App-header">
      <State />
    </div>
  );
}
export default App;
