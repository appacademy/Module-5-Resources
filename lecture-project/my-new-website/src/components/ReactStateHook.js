import { useState } from "react"

export default function ReactStateHook(){
  //! what is a re-render?
  // whenever this component runs again


  // invoke a useState setter with a new ref in memory
  const [countSlice, setCountSlice] = useState({ count: 0 })

  let localVar = 0;

  return (
    <div>
      <h1>React State</h1>
      <h2>localVar: {localVar}</h2>
      <button
        onClick={() => {
          localVar += 1
          console.log("localVar: ", localVar)
        }}
      >change localVar</button>

      <h2>countSlice: {countSlice.count}</h2>
      <button
        onClick={() => {
          countSlice.count = countSlice.count + 1
          setCountSlice({...countSlice})
          console.log("countSlice: ", countSlice)
          console.log("localVar: ", localVar)
        }}
      >change countSlice</button>
    </div>
  )
}