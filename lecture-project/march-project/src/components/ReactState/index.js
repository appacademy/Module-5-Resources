import React, { useState } from 'react'

export default function ReactState(props){
  //!! valid react state
  const [countSlice, setCountSlice] = useState(0)
  const [countRef, setCountRef] = useState({ current: 0 })

  return (
    <div>
      <h1>countRef: {countRef.current}</h1>
      <h1>countSlice: {countSlice}</h1>
      <button
        onClick={() => {
          // countRef.current = countRef.current + 1
          // const count = countRef.current
          setCountRef({ ...countRef, current: countRef.current + 1 })
          console.log("count in click: ", countRef)
        }}
      >increment</button>
      <button
        onClick={() => {
          //!! async code
          setCountSlice(countSlice + 1)
          //!! sync code
          console.log("countSlice: ", countSlice)
        }}
      >increment with setter</button>
    </div>
  )
}

