import { useSelector, useDispatch } from 'react-redux';
import MapCard from './MapCard';
import { thunkFetchAllSpots } from '../redux/spots';

export default function DisplayCards() {
  const dispatch = useDispatch();
  const storeData = useSelector((store) => store.spots);

  if (!Object.keys(storeData) === 0) {
    // pseudocode
    // handle promise from async thunk
    // we'd need an async function for await syntax here
    const resultOfFetch = await dispatch(thunkFetchAllSpots())
    if (resultOfFetch) {
      return null;
    } else {
      const error = resultOfFetch
      setErrors(error)
      return (
        <div>
          <h1>yo! something went wrong</h1>
          <h2>Error message: {error.message}</h2>
        </div>
      )
    }
  }

  const dataArr = Object.values(storeData);
  return (
    <div>
      <h5>Map all the things!</h5>
      {dataArr.map((thing) => (
        <div>
          <MapCard oneThing={thing} />
        </div>
      ))}
    </div>
  )
}