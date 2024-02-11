// To run this bonus Thermometer, import it in src/App.js
import ReactSlider from 'react-slider';
import './Thermometer.css';
import { useEffect, useState } from 'react';
import { useClimate } from '../../context/ClimateContext';

function ThermometerBonus() {
  const { temperature, setTemperature } = useClimate();
  const [goal, setGoal] = useState(temperature);

  useEffect(() => {
    const changeTemp = setTimeout(() => {
      if (goal < temperature) {
        setTemperature((prevTemperature) => prevTemperature - 1);
      }
      if (goal > temperature) {
        setTemperature((prevTemperature) => prevTemperature + 1);
      }
    }, 1000);

    return () => {
      clearTimeout(changeTemp);
    };
  }, [goal, temperature, setTemperature]);

  return (
    <section>
      <h2>Thermometer</h2>
      <div className='actual-temp'>Actual Temperature: {temperature}°F</div>
      <ReactSlider
        value={goal}
        onAfterChange={(val) => {
          setGoal(val);
        }}
        className='thermometer-slider'
        thumbClassName='thermometer-thumb'
        trackClassName='thermometer-track'
        ariaLabel={'Thermometer'}
        orientation='vertical'
        min={0}
        max={120}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default ThermometerBonus;
