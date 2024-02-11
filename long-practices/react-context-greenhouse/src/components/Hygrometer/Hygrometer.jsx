import ReactSlider from 'react-slider';
//!!START SILENT
import { useClimate } from '../../context/ClimateContext';
//!!END
import './Hygrometer.css';

function Hygrometer() {
  //!!START SILENT
  const { humidity, setHumidity } = useClimate();

  //!!END
  return (
    <section>
      <h2>Hygrometer</h2>
      {/*!!START SILENT */}
      <div className='actual-humid'>Actual Humidity: {humidity}%</div>
      {/*!!END */}
      {/*!!ADD */}
      {/* <div className="actual-humid">Actual Humidity: {"y"}%</div> */}
      {/*!!END_ADD */}
      <ReactSlider
        //!!START SILENT
        value={humidity}
        onAfterChange={(val) => {
          setHumidity(val);
        }}
        //!!END
        //!!ADD
        // value={10}
        // onAfterChange={(val) => {}}
        //!!END_ADD
        className="hygrometer-slider"
        thumbClassName="hygrometer-thumb"
        trackClassName="hygrometer-track"
        ariaLabel={"Hygrometer"}
        orientation="vertical"
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
