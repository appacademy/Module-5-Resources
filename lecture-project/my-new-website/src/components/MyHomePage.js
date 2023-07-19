import { useEffect, useState } from 'react'

export default function MyHomePage(){
  const [pic, setPic] = useState("")

  useEffect(() => {
    const getImage = async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await res.json()
      const dataArr = Object.keys(data.message)
      console.log(dataArr)
      setPic(dataArr)
    }
    getImage()
    console.log(pic)
  }, [])


  return (
    <div>
      <span>yo howdy</span>
      <h3>hey a puppy!</h3>
      {/* <img src={pic}></img> */}
      {pic && pic.map((breedName) => (
        <div>
          <h3>{breedName}</h3>
        </div>
      ))}
    </div>
  )
}