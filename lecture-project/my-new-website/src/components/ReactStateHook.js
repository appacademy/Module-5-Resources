import { useEffect, useState } from "react"

export default function ReactStateHook(){
  //! what is a re-render?
  // whenever this component runs again
  // invoke a useState setter with a new ref in memory
  const [countSlice, setCountSlice] = useState({ count: 0 })
  const [data, setData] = useState({})

  //! these uE run asynchronously
  useEffect(() => {
    // const getStuff = async () => {
    //   const res = await fetch("http://somewhere.com")
    //   const data = await res.json()
    //   setData(data)
    // }
    setData({ resultFromApi: "hewooooo!!!" })
    // getStuff()
  }, [])

  useEffect(() => {
    console.log("hi there", data)
  }, [data])

  useEffect(() => {
    
  })
  console.log("", data)

  let localVar = 0;

  //! short circuit
  if(!Object.values(data).length) return null

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


      <h1>Here's my data!!!!: {data.id && data.resultFromApi}</h1>
    </div>
  )
}