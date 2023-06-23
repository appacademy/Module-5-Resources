import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import PacmanLoader from "react-spinners/PacmanLoader";

export default function PuppyDetails() {
  const { breed } = useParams();
  const [loading, setLoading] = useState(true);
  const [topImage, setTop] = useState("")
  const [bottomImages, setBottomImages] = useState([])

  useEffect(() => {
    const id = setTimeout(() => {
      setLoading(false);
    }, 1300);

    const getTopImage = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random`)
      const data = await res.json()
      setTop(data.message)
    }

    const getBottomImages = async () => {
      const res = await fetch(`https://dog.ceo/api/breed/${breed}/images/random/3`)
      const data = await res.json()
      setBottomImages((data.message))
    }

    getTopImage()
    getBottomImages()

    return () => {
      clearTimeout(id);
    };
  }, []);

  if (loading)
    return (
      <h1 className="loading-div">
        <PacmanLoader
          // color={color}
          // loading={loading}
          // cssOverride={override}
          size={50}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </h1>
    );

  return (
    <div className="pupp-details-wrapper">
      <h2>Your Puppy Breed of Choice is {breed}</h2>
      <div>
        <img src={topImage} alt="whatevs" />
        <div>
          {bottomImages.map((image) => (
            <div className="small-image">
              <img src={image} alt="whatever"/>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
