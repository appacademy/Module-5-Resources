import { useContext, useEffect, useRef } from "react";
import { ApodContext } from "../context/ApodContext";

export default function ApodShow() {
  const { apodObj, setApodObj } = useContext(ApodContext);
  const fetchRef = useRef();

  useEffect(() => {
    if(!fetchRef.current) {
      fetchAPOD();
      fetchRef.current = true
    }
  }, [])

  const fetchAPOD = () => {
    fetch("https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY")
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
        setApodObj(data)
      })
      .catch(() => {});
  };

  return (
    <div>
      <h1>apod page</h1>
      <h2>here&apos;s the picture of the day!!!</h2>
      <img src={apodObj.hdurl} alt={apodObj.title} />
      <p>{apodObj.explanation}</p>
    </div>
  );
}
