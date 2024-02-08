import horoscopeObj from '../data/horoscopes';

const Navbar = () => {
  const horoscopes = Object.keys(horoscopeObj);
  return (
    <nav>
      {horoscopes.map(sign => (
        <span key={sign}>{sign}</span>
      ))}
    </nav>
  );
};

export default Navbar;
