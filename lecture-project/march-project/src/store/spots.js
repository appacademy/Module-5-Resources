// types
// all the crud possible in this slice of state
const CREATE_SPOT = "spots/createSingleSpot"
const READ_SPOTS = "spots/READ_ALL_SpotS"
const READ_SINGLE_SPOT = "spots/READSINGLESpot"
const UPDATE_SPOT = "spots/UPDATE_SingleSpot"
const DELETE_SPOT = "spots/DELETE_SingleSpot"

// action creators
export const actionCreateSpot = (data) => ({
  type: CREATE_SPOT,
  payload: data
})

export const actionDeleteSpot = (id) => ({
  type: DELETE_SPOT,
  id
})

export const actionReadSpot = (spots) => ({
  type: READ_SPOTS,
  spots
})

//!! thunks -> the gateway to our backend api
export const thunkCreateSpot = (spotFormData, images) => async (dispatch, getState) => {
  // body of logic
  // fetch
  // modify fetch
  // prepare data for the action creator
  // dispatch creator
  // send errors to component

  const res = await fetch("/api/spots", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(spotFormData)
  })

  if(res.ok){
    const spot = await res.json();
    dispatch(thunkAddImageToSpot(images, spot))
    return spot
  } else {
    const error = await res.json();
    return error
  } 
}

export const thunkAddImageToSpot = (images, spot) => async (dispatch, getState) => {
  const res = await fetch(`/api/spots/${spot.id}/images`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(images)
  })

  if(res.ok){
    const spot = await res.json();
    dispatch(actionCreateSpot(spot))
    return spot
  } else {
    const error = await res.json();
    return error
  } 
}




// reducer section

const initialState = { message: "yo i'm some content" };

export default function spotReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_SPOT: {
      const newState = { ...state }
      const newSpot = action.payload
      newState[action.payload.id] = newSpot
      return newState
    }
    case READ_SPOTS: {
      const newState = { ...state }
      const newSpot = action.payload
      newState[action.payload.id] = newSpot
      return newState
    }
    case READ_SINGLE_SPOT: {
      const newState = { ...state }
      const newSpot = action.payload
      newState[action.payload.id] = newSpot
      return newState
    }
    case UPDATE_SPOT: {
      const newState = { ...state }
      const newSpot = action.payload
      newState[action.payload.id] = newSpot
      return newState
    }
    case DELETE_SPOT: {
      const newState = { ...state }
      delete newState[action.id]
      return newState
    }
    default:
      return state;
  }
}

