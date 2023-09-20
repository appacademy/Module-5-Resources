// TODO: TYPES
// represent crud activity allowed in this slice
const READ_ALL_SPOTS = "spots/readAllSpots";
const READ_SINGLE_SPOT = "spots/readSingle";
const CREATE_SPOT = "spots/createSpot";
// const UPDATE_SPOT;
// const DELETE_SPOT;

// TODO: ACTION CREATORS
export const actionReadAllSpots = (spots) => ({
  type: READ_ALL_SPOTS,
  payload: spots,
});

// TODO: REDUCER FUNCTION
const initialState = {};

// reducers must be pure functions
export default function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_SPOTS: {
      // action.payload == [{}, {}]
      //!! always create new refs
      const newState = { ...state };

      //!! always do mutation on new ref
      action.payload.forEach((i) => {
        // computed property names
        newState[i.id] = i;
      });

      //!! always return the new ref that was mutated
      return newState;
    }
    case READ_SINGLE_SPOT: {
      return state;
    }
    case CREATE_SPOT: {
      return state;
    }
    default:
      return state;
  }
}

/*
currentState = { 1, 2 , 3 }

dispatch(action) ->
reducers run -> 

newState1 = spotsReducer(currentState, action)
// { 1, 2 }

dispatch(action)
newState2 = spotsReducer(newState1, action)
// { 1 }
 */
