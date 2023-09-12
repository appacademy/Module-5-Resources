import { useState } from "react";
import Header from "./components/Header";
import "./App.css";
import MapCard from "./components/MapCard";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <Header content={"hi there?"} />
      <h1>hi from react!</h1>
      <h3>count: {count}</h3>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        increment
      </button>

      {[1,2,3,4,5].map((ele) => (<MapCard num={ele} />))}
    </div>
  );
}
export default App;
