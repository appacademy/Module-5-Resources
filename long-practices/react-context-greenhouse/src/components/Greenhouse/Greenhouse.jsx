import dayImage from './images/greenhouse-day.jpg';
import nightImage from './images/greenhouse-night.jpg';
//!!START SILENT
import { useTheme } from '../../context/ThemeContext';
//!!END
import './Greenhouse.css';

import LightSwitch from './LightSwitch';
import ClimateStats from './ClimateStats';

function Greenhouse() {
  //!!START SILENT
  const { themeName } = useTheme();
  //!!END

  return (
    <section>
      <img  className='greenhouse-img'
            //!!START SILENT
            src={themeName === 'day' ? dayImage : nightImage}
            //!!END
            //!!ADD 
            // src={dayImage}
            //!!END_ADD 
            alt='greenhouse' 
      />
      <LightSwitch />
      <ClimateStats />
    </section>
  );
}

export default Greenhouse;
