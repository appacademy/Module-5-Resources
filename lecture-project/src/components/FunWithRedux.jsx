import { useDispatch, useSelector } from "react-redux";
import {
  actionCreateSpot,
  actionDeleteSpot,
  thunkCreateSpot,
} from "../redux/spots";
import { useEffect, useState } from "react";

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

    // collect data from form

    const results = await dispatch(
      thunkCreateSpot({ superDooperPooperScooper: null })
    );

    if (results.message) {
      //!! failure
      setErrors({ message: results.message });
    } else {
      //!! success
      // navigate away to appropriate page
    }
  };

  useEffect(() => {
    console.log("yo wtf man: ", errors)
  }, [errors])

  return (
    <>
      <h2>Hi from the dispatcher!</h2>
      {Object.values(errors).length > 0 && (
        <h1 style={{ color: "red" }}>{errors.message}</h1>
      )}
      <button onClick={handleClick}>Hit the express app</button>
    </>
  );
}

/* 

!! dispatch -> actionCreator() -> reducers run -> subscribers run -> setter triggered -> components re-render

*/
