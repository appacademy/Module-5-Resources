import { useEffect } from "react"
import { useHelperFunction } from "./hooks"

export default function UseEffect() {
  // TODO: RENDERS MUST BE "PURE"
  
  // useHelperFunction()

  // to keep renders pure, useEffect runs your effects AFTER
  // the render
  useEffect(() => {
    // run a side effect after the component renders

    console.log('use effect is running')
  })

  return (
    <div>
      <h1>UseEffect</h1>
      {console.log("component was invoked and we rendered")}
    </div>
  )
}