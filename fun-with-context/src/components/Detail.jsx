import { useContext } from "react";
import { HoroscopeContext } from "../context/HoroscopeContext";
import Match from "./Match";

const Detail = () => {
  const horoscopeContextValue = useContext(HoroscopeContext);
  console.log(horoscopeContextValue)
  return (
    <div className='details'>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/e/e1/FullMoon2010.jpg'
        alt=''
      />
      <h2>Current Sign Name</h2>
      {console.log(horoscopeContextValue.element)}
      <h4>Element: {horoscopeContextValue.sign.element}</h4>
      <h4>Traits: {horoscopeContextValue.sign.traits}</h4>
      <Match />
    </div>
  );
};

export default Detail;
