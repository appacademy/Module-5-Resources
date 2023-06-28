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

// export const actionCreateSpot = (data) => ({
//   type: CREATE_SPOT,
//   payload: data
// })

// export const actionCreateSpot = (data) => ({
//   type: CREATE_SPOT,
//   payload: data
// })

// export const actionCreateSpot = (data) => ({
//   type: CREATE_SPOT,
//   payload: data
// })

// thunks


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

