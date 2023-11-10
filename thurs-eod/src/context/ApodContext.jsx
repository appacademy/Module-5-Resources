import { createContext, useState } from "react";

const ApodContext = createContext();

export default function ApodContextProvider(props) {
  const [apodObj, setApodObj] = useState({});

  return (
    <ApodContext.Provider value={{ apodObj, setApodObj }}>
      {props.children}
    </ApodContext.Provider>
  )
}