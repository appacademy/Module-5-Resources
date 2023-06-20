import React, { useState } from "react";
import Cards from './components/Cards'
import "./App.css";



const testElement = document.createElement("div")

window.React = React
window.testElement = testElement

const banana = { green: "not great", yellow: "awesome!" }

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
      <Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>
      <div onClick={() => {}} key={"string"}>
          this is jsx
      </div>
      
      {/* {Array(20).fill("dollarbills").map((el, idx) => (<div key={idx}>
        <h3>here is the element: {el}</h3>
      </div>))} */}
      {[
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
        (<Cards 
        banana={banana}
        onClick={() => {}}
      >
        <h2>I'm the h2 child</h2>
        <h2>I'm the h2 child</h2>
      </Cards>),
      ]}
    </div>
  );
}

export default App;

