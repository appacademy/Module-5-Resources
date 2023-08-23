import { useDispatch, useSelector } from "react-redux";
import { actionCreateSpot, actionDeleteSpot } from "../redux/spots";

export function ReduxSubscriber(){
  const dataFromStore = useSelector((store) => store.spots.allSpots)
  return (
    <div>
      <h1>Redux Subscriber</h1>
      <h2>Data from Redux: </h2>
      {Object.values(dataFromStore).map((spot) => (<div key={spot.id}>
        <h5>{JSON.stringify(spot)}</h5>
      </div>))}
      <Separator />
    </div>
  )
}

export function Separator(){
  return (
    <>
      <hr />
      <ReduxDispatcher />
      <hr />
    </>
  )
}

export function ReduxDispatcher(){
  const dispatch = useDispatch();
  return (
    <>
      <h2>
        Hi from the dispatcher!
      </h2>
      <button onClick={() => {
        dispatch(actionCreateSpot({
          id: 1,
          ownerId: 1,
          address: "123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "App Academy",
          description: "Place where web developers are created",
          price: 123,
          createdAt: "2021-11-19 20:39:36",
          updatedAt: "2021-11-19 20:39:36",
          avgRating: 4.5,
          previewImage: "image url",
        }))
      }}>
        Dispatch spot 1!
      </button>
      <button onClick={() => {
        dispatch(actionCreateSpot({
          id: 2,
          ownerId: 1,
          address: "123 Disney Lane",
          city: "San Francisco",
          state: "California",
          country: "United States of America",
          lat: 37.7645358,
          lng: -122.4730327,
          name: "App Academy",
          description: "Place where web developers are created",
          price: 123,
          createdAt: "2021-11-19 20:39:36",
          updatedAt: "2021-11-19 20:39:36",
          avgRating: 4.5,
          previewImage: "image url",
        }))
      }}>
        Dispatch spot 2!
      </button>
      <button onClick={() => {
        dispatch(actionDeleteSpot(2))
      }}>
        delete spot 2!
      </button>
    </>
  )
}



/* 

!! dispatch -> actionCreator() -> reducers run -> subscribers run -> setter triggered -> components re-render

*/