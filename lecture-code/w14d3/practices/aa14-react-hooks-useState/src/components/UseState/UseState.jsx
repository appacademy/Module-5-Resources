import { useState } from  'react'
import "./UseState.css"

const UseState = () => {
  // console.log(useState("light"))
  const [theme, setTheme] = useState("light")
  // const counter = 0
  const [count, setCount ] = useState(0)

  return (
    <div className={`state ${theme}`}>
      <h1>UseState Component</h1>
      <button
        onClick={ () => setTheme("dark")}
        >
          Dark
        </button>
      <button
       onClick={ () => setTheme("light")}
      >
        Light
      </button>
      <h2>COUNT: { count }</h2>
      <button
        onClick={ () => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button
        onClick={ () => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
    </div>
  );
};

export default UseState;
