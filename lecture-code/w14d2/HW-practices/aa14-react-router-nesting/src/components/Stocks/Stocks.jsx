import { Navigate, useNavigate } from 'react-router-dom';

function Stocks() {
  const navigate = useNavigate();
  const loggedIn = true;

  if (!loggedIn) return <Navigate to='/not-logged-in' replace={true} />;

  const handleClick = () => {
    window.alert('Sending info to the DB!');
    navigate('/');
  };

  return (
    <div className='comp orange'>
      <h1>Stocks Component</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
}

export default Stocks;
