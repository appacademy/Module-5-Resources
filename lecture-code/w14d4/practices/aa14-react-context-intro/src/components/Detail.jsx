import { HoroscopeContext } from "../context/HoroscopeContext";
import { useContext } from "react";

const Detail = () => {
  const HoroscopesObj = useContext(HoroscopeContext)
  return (
    <div className='details'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg'
        alt=''
      />
      <h2>Current Sign Name</h2>
      <h4>Element: </h4>
      <h4>Traits: </h4>
    </div>
  );
};

export default Detail;
