import './LightSwitch.css';
//!!START SILENT
import { useTheme } from '../../context/ThemeContext';
//!!END

function LightSwitch() {
  //!!START SILENT
  const { themeName, setThemeName } = useTheme();

  //!!END
  return (
    //!!START SILENT
    <div className={`light-switch ${themeName}`}>
      <div onClick={() => setThemeName('day')} className='on'>
        DAY
      </div>
      <div onClick={() => setThemeName('night')} className='off'>
        NIGHT
      </div>
    </div>
    //!!END
    //!!ADD
    // <div className="light-switch day">
      // <div className="on">DAY</div>
      // <div className="off">NIGHT</div>
    // </div>
    //!!END_ADD
  );
}

export default LightSwitch;
