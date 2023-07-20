import { useCallback } from "react"

export default function Cats(){
  const getKitties = useCallback(async () => {
    const res = await fetch("https://api.thecatapi.com/v1/images/0XYvRd7oD")
    const data = await res.json()

  }, [])

  
  return (
    <div>
      bzzt
    </div>
  )
}



async function getMuhKitty(){
  
}