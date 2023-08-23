import { useDispatch, useSelector } from "react-redux";
import {
  actionCreateSpot,
  actionDeleteSpot,
  thunkCreateSpot,
} from "../redux/spots";
import { useState } from "react";

export function ReduxSubscriber() {
  const dataFromStore = useSelector((store) => store.spots.allSpots);
  return (
    <div>
      <h1>Redux Subscriber</h1>
      <h2>Data from Redux: </h2>
      {Object.values(dataFromStore).map((spot) => (
        <div key={spot.id}>
          <h5>{JSON.stringify(spot)}</h5>
        </div>
      ))}
      <Separator />
    </div>
  );
}

export function Separator() {
  return (
    <>
      <hr />
      <ReduxDispatcher />
      <hr />
    </>
  );
}

export function ReduxDispatcher() {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState([]);

  const handleClick = async () => {

    const results = await dispatch(
      thunkCreateSpot({ superDooperPooperScooper: null })
    );

    if (results) {
      //!! failure
      setErrors(results.message);
    } else {
      //!! success
      // navigate away to appropriate page
    }
  };

  return (
    <>
      <h2>Hi from the dispatcher!</h2>
      {errors.length > 0 && (
        <h1 style={{ color: "red" }}>{JSON.stringify(errors)}</h1>
      )}
      <button onClick={handleClick}>Hit the express app</button>
    </>
  );
}

/* 

!! dispatch -> actionCreator() -> reducers run -> subscribers run -> setter triggered -> components re-render

*/
