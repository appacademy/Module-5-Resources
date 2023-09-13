import { useEffect, useState } from 'react';

const outsideState = { value: 0 };

export default function State() {
  console.log("render starting")
  const [state, setState] = useState({ value: 0 });

  var foo = 0;

  // run a callback at specific times
  useEffect(() => { 
    console.log("effect running on mount")
   }, [])
  useEffect(() => { console.log("effect running after every render") })

  //Object.is()
  // oldRef === newRef
  useEffect(() => { 
    console.log("effect tracking state: ", state)
   }, [state])

  useEffect(() => {
    // slowest part of code
    fetch("").then(() => {
      return res => res.json()
    }).then((data) => {
      setState(data)
    }).catch((error) => {
      console.log("there was a fetch error, error: ", error);
    })
  }, [])

  useEffect(() => {}, [state])

  return (
    <div>
      <h1>this is our state component</h1>
      <br />
      <h3>outsideState: {outsideState.value}</h3>
      <h3>local var foo: {foo}</h3>
      <h3>useState hook: {state.value}</h3>
      <button onClick={() => {
        outsideState.value += 1;
        console.log("outsideState: ", outsideState)
      }}>
        inc outsideState
      </button>
      <br />
      <button onClick={() => {
        foo += 1;
        console.log("var foo: ", foo);
      }}>
        inc local var foo
      </button>
      <br />



      <button onClick={() => {
        // create a new obj
        // spread old obj into new ref
        const newObj = { ...state };

        // manipulate/mutate the new obj
        newObj.value = state.value + 1

        // Invoke a useState setter with a new ref in memory to trigger a re-render
        setState((oldState) => {
          console.log("use state callback executing")
          return newObj
        })

        console.log("useState getter: ", state);
      }}>
        inc useState
      </button>



      {console.log("rendering -> end of jsx")}
    </div>
  )
}