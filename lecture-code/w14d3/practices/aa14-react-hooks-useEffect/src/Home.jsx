import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className='home-container'>
      <h1>Welcome to the Cat Status App</h1>
      <h2>Push the Button Below to Enter</h2>
      <button onClick={() => navigate('/cat')}>Enter</button>
    </div>
  );
};

export default Home;
