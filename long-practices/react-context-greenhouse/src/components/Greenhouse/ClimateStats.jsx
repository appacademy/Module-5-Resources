import './ClimateStats.css';
//!!START SILENT
import { useClimate } from '../../context/ClimateContext';
//!!END

function ClimateStats() {
  //!!START SILENT
  const { temperature, humidity } = useClimate();
  //!!END

  return (
    <div className="climate-stats">
      <div className="temperature">
        {/*!!START SILENT  */}
        Temperature {temperature}°F
        {/*!!END */}
        {/*!!ADD */}
        {/* Temperature {"x"}°F */}
        {/*!!END_ADD */}
      </div>
      <div className="humidity">
        {/*!!START SILENT  */}
        Humidity {humidity}%
        {/*!!END */}
        {/*!!ADD */}
        {/* Humidity {"y"}% */}
        {/*!!END_ADD */}
      </div>
    </div>
  )
}

export default ClimateStats;
