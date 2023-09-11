import { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [count, setCount] = useState(0);
  return (
    <div className="App">
      <h1>hi from react!</h1>
      <h3>count: {count}</h3>
      <button onClick={() => {
        setCount(count + 1)
      }}>increment</button>
    </div>
  );
}

export default App;
