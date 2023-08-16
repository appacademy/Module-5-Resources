import React, { useState } from "react";

// what is state in React?

// what are renders?
// mount
// unmount
// re-render


// global state - heap memory
let globalVar = 0;

export default function Hooks(props){
  // local states - stack memory (mostly)

  const [slice, setSlice] = useState(0); // slice of state stored in the heap
  let localVar = 0; // resets every render

  return (
    <div>
      <h1>rendering hooks</h1>
      <h3>local var: {localVar}</h3>
      <button onClick={() => {
        localVar += 1
        console.log("localVar: ", localVar)
      }}>
        change local state
      </button>
      <h3>global var: {globalVar}</h3>
      <button onClick={() => {
        globalVar += 1
        console.log("globalVar: ", globalVar)
      }}>
        change global state
      </button>
      <h3>useState slice: {slice}</h3>
      <button onClick={() => {
        setSlice(slice + 1)
        console.log("useState slice: ", slice)
      }}>
        change useState
      </button>
    </div>
  )
}