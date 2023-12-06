import { useState } from "react";

import { useHelperFunction } from "./hooks"

function App() {
  // const [validCount, setValidCount] = useState(0);
  const [validCount, setValidCount] = useHelperFunction({ count: 0 });
  
  let invalidCount = 0;
  
  return (
    <div>
      {console.log("rerendering")}
      <h2>invalid count: {invalidCount}</h2>
      <h2>valid count: {validCount.count}</h2>
      <h2></h2>
      <button onClick={() => {
        invalidCount += 1
        console.log(invalidCount)
      }}>test invalid count</button>


      <button onClick={() => {
        validCount.count += 1
        // setValidCount(validCount + 1)

        const newRef = { ...validCount, count: validCount.count + 1 } 
        const altNewRef = { count: validCount.count + 1 } 
        // { count: 0, count: 1 }

        // setValidCount(newRef)
        setValidCount(altNewRef)
        console.log("validCount", newRef)
        // console.log("mutated old ref: ", validCount)
      }}>test valid count</button>

    </div>
  )
}

export default App
