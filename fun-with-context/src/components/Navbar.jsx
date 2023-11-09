import { useContext } from 'react';
import horoscopeObj from '../data/horoscopes';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Navbar = () => {
  const horoscopes = Object.keys(horoscopeObj);
  const { setCurrentSign } = useContext(HoroscopeContext)
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign} onClick={() => setCurrentSign(sign)} >{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
