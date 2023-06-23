import { useEffect, useState } from "react";
import PuppyCard from "./PuppyCard";

export default function PuppyList() {
  const [puppyList, setPuppyList] = useState([])

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dog.ceo/api/breeds/list/all")
      const data = await res.json()
      setPuppyList(Object.keys(data.message))
    })()
  }, [])

  return (
    <>
      <h1>Puppy Home</h1>
      <div id="puppy-list">
        {puppyList.map((breed) => (<PuppyCard breed={breed} key={breed}/>))}
      </div>
    </>
  );
}
