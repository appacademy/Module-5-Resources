// types
const READ_ALL_SPOTS = "spots/readAllSpots";

// action creators
const actionReadAllSpots = (spots) => {
  return {
    type: READ_ALL_SPOTS,
    payload: spots,
  };
};

//some other file
const handleSubmit = async (e) => {
  e.preventDefault();

  //get form data
  const formData = {
    stuff: "thing",
  };

  // doing the thing
  

  // we want to save the return of the thunk
  const returnFromRoute = await dispatch(thunkReadAllSpots(formData));

  // examine the return for errors
  if(returnFromRoute.errors) {

    // send api errors to React to render to the user
    setErrors(returnFromRoute.errors)
  } 
};

// thunks
const thunkReadAllSpots = (dataFromComponent) => async (dispatch, getState) => {
  // a fancy helper function
  
  //todo: DISPATCH, if given a FUNCTION, will invoke the function, and pass itself into the function
  
  // LETS DO THE THING
  const response = await fetch("/api/spots", {
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(dataFromComponent),
  });

  if(response.ok){
    // do the thing
    // TODO success response
    
    const data = await response.json();

    // { Spots: [{}] }

    dispatch(actionReadAllSpots(data.Spots))
    
  } else {
    // todo error response

    // { errors: }
    const errors = await response.json();

    return errors
  }
  
};

// reducer stuff

const initialState = {};

export default function spotsReducer(state = initialState, action) {
  switch (action.type) {
    case READ_ALL_SPOTS:
      return "new state";
    default:
      return state;
  }
}

// example of middleware in Express
router.get("/", validate, async (req, res, next) => {
  next(req, res);
  res.json({});
});
