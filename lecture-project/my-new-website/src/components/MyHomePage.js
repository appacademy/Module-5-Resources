import { useEffect, useState } from 'react'

export default function MyHomePage(){
  const [pic, setPic] = useState("")

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/image/random")
      const data = await res.json()
      setPic(data.message)
    }
    getImage()
    console.log(pic)
  }, [])

  return (
    <div>
      <span>yo howdy</span>
      <h3>hey a puppy!</h3>
      <img src={pic}></img>
    </div>
  )
}