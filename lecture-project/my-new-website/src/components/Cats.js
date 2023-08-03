import { useCats } from "../context/CatsProvider"

export default function Cats(){
  const { val } = useCats()
  return (
    <div>
      <h1>Context value is: {val}</h1>
    </div>
  )
}