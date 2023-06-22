import { useEffect, useState } from "react"

export default function Puppies(){
  const [list, setList] = useState([])

  useEffect(() => {
    const getData = async () => {
      const responseObj = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await responseObj.json()
      setList(Object.entries(data.message))
    }
    getData()
  }, [])

  return (
    <div>
      <h1>List of Puppy Breeds</h1>
      <div className="card-container">

      {list.length > 0 && list.map(([name, subBreedsList]) => (
        <div className="card">
          <h4>{name}</h4>
          <span>sub breeds: {subBreedsList.length}</span>
        </div>
      ))}
      </div>
    </div>
  )
}