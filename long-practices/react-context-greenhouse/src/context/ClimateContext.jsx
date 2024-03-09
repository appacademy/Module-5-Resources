// Temperature has a default value of 50 degrees
// Humidity has a default value of 40%
//!!START SILENT
import { useState, useContext, createContext } from 'react';

export const ClimateContext = createContext();
export const useClimate = () => useContext(ClimateContext);

export default function ClimateProvider({ children }) {
  const [temperature, setTemperature] = useState(50);
  const [humidity, setHumidity] = useState(40);

  return (
    <ClimateContext.Provider
      value={{ temperature, setTemperature, humidity, setHumidity }}
    >
      {children}
    </ClimateContext.Provider>
  );
}
//!!END
