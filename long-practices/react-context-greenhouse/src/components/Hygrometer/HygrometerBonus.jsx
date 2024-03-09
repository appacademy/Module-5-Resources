// To run this bonus Hygrometer, import it in src/App.js
import ReactSlider from 'react-slider';
import { useState, useEffect } from 'react';
import { useClimate } from '../../context/ClimateContext';
import './Hygrometer.css';

function Hygrometer() {
  const { humidity, setHumidity } = useClimate();
  const [goal, setGoal] = useState(humidity);

  useEffect(() => {
    const changeTemp = setInterval(() => {
      if (goal < humidity) {
        setHumidity((prevHumidity) =>
          prevHumidity - goal === 1 ? prevHumidity - 1 : prevHumidity - 2
        );
      }
      if (goal > humidity) {
        setHumidity((prevHumidity) =>
          goal - prevHumidity === 1 ? prevHumidity + 1 : prevHumidity + 2
        );
      }
    }, 1000);

    return () => {
      clearInterval(changeTemp);
    };
  }, [goal, humidity, setHumidity]);

  return (
    <section>
      <h2>Hygrometer</h2>
      <div className='actual-humid'>Actual Humidity: {humidity}%</div>
      <ReactSlider
        value={goal}
        onAfterChange={(val) => {
          setGoal(val);
        }}
        className='hygrometer-slider'
        thumbClassName='hygrometer-thumb'
        trackClassName='hygrometer-track'
        ariaLabel={'Hygrometer'}
        orientation='vertical'
        min={0}
        max={100}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        invert
        pearling
        minDistance={1}
      />
    </section>
  );
}

export default Hygrometer;
