import { useNavigate } from "react-router-dom";

function Movies() {
  const navigate = useNavigate()
  const handleClick = () => {
    navigate('/')
  }

  return (
    <div className="comp orange">
      <h1>Movies Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Movies;
