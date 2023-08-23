// type
const CREATE_SPOT = "spot/CreateOneSpot";
const UPDATE_SPOT = "spot/UPDATEOneSpot";
const DELETE_SPOT = "spot/DELETEOneSpot";

// action creators
export const actionCreateSpot = (spot) => {
  return { type: CREATE_SPOT, payload: spot };
};

export const actionUpdateSpot = (spot) => {
  return { type: UPDATE_SPOT, payload: spot };
};

export const actionDeleteSpot = (id) => {
  return { type: DELETE_SPOT, id };
};

//!! REDUCERS ARE PURE FUNCTIONS

const initialState = { allSpots: {}, spotDetails: {} };

export default function spotReducer(state = initialState, action) {
  console.log("spot reducer running, action: ", action)
  switch (action.type) {
    case CREATE_SPOT: {
      // do the thing (modify state)
      const newState = { ...state, allSpots: { ...state.allSpots } }; // { allSpots: {}, spotDetails: {} }

      newState.allSpots[action.payload.id] = action.payload;

      return newState;
    }
    case UPDATE_SPOT: {
      // do the thing
      return {};
    }
    case DELETE_SPOT: {
      const newState = {
        ...state,
        allSpots: { ...state.allSpots },
        spotDetails: {},
      };
      delete newState.allSpots[action.id];
      return newState;
    }
    default: {
      return state;
    }
  }
}
