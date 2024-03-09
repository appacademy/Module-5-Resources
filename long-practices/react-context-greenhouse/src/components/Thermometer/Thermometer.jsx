import ReactSlider from 'react-slider';
//!!START SILENT
import { useClimate } from '../../context/ClimateContext';
//!!END
import './Thermometer.css';

function Thermometer() {
  //!!START SILENT
  const { temperature, setTemperature } = useClimate();

  //!!END
  return (
    <section>
      <h2>Thermometer</h2>
      {/*!!START SILENT */}
      <div className='actual-temp'>Actual Temperature: {temperature}°F</div>
      {/*!!END */}
      {/*!!ADD */}
      {/* <div className="actual-temp">Actual Temperature: {"x"}°F</div> */}
      {/*!!END_ADD */}
      <ReactSlider
        //!!START SILENT
        value={temperature}
        onAfterChange={(val) => {
          setTemperature(val);
        }}
        //!!END
        //!!ADD
        // value={40}
        // onAfterChange={(val) => {}}
        //!!END_ADD
        className="thermometer-slider"
        thumbClassName="thermometer-thumb"
        trackClassName="thermometer-track"
        ariaLabel={"Thermometer"}
        orientation="vertical"
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

export default Thermometer;
