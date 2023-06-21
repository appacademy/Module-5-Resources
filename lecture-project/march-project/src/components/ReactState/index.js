import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router-dom'

export default function ReactState(props){
  const history = useHistory();
  //!! valid react state
  const [countSlice, setCountSlice] = useState(0)
  const [countRef, setCountRef] = useState({ current: 0 })

  useEffect(() => {
    console.warn("useEffect running on MOUNT")

  }, [])
  
  useEffect(() => {
    console.log("useEffect tracking a reference in memory, countRef: ", countRef)
    return () => {
     console.warn("useEffect returning")
    }
  }, [countRef])

  useEffect(() => {
    console.log("useEffect running after every update")
  })

  
  console.log("logging in the component")

  return (
    <div>
      <h1>countRef: {countRef.current}</h1>
      <h1>countSlice: {countSlice}</h1>
      <button
        onClick={() => {
          // countRef.current = countRef.current + 1
          // const count = countRef.current
          setCountRef((prevRef) => ({ ...countRef, current: prevRef.current + 1 }))
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
      <button
        onClick={() => {
          history.push("/")
        }}
      >nav away</button>
    </div>
  )
}

