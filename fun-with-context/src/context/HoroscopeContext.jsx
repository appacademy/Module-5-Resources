import { createContext, useState } from "react";
import horoscopes from "../data/horoscopes";

export const HoroscopeContext = createContext();

export default function HoroscopeProvider(props) {
  const [currentSign, setCurrentSign] = useState("Taurus");
  const sign = horoscopes[currentSign];
  console.log(currentSign)
  return (
    <HoroscopeContext.Provider value={{ sign, setCurrentSign }}>
      {props.children}
    </HoroscopeContext.Provider>
  )
}
