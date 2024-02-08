import { useContext } from 'react';
import { HoroscopeContext } from '../context/HoroscopeContext';

const Detail = () => {
  const { sign } = useContext(HoroscopeContext);
    
  return (
    <div className='details'>
      <img
        src={sign.backgroundImg}
        alt='sign-image'
      />
      <h2>{sign.name}</h2>
      <h4>Element: {sign.element}</h4>
      <h4>Traits: {sign.traits}</h4>
    </div>
  );
};

export default Detail;
