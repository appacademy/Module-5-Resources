
// 1.  types - they must be UNIQUE
const CREATE = "session/create_user"
const LOAD_GROUPS = "this is the wrong slice, ain't it..."


// 2.  action creator
export const actionCreate = () => ({
  type: CREATE
})

export const actionLoadGroups = (groupsFromDB) => ({
  type: LOAD_GROUPS,
  payload: groupsFromDB
})

// dispatch(thunkCreate())

// how redux-thunk works
const dispatch = (fn) => {
  if(typeof fn === "function"){
    return fn(dispatch, getState)
  }
}
// use in comp
const returnFromFetch = await dispatch(thunkCreate()) // -> [{}, ...]

// after we dispatch...
if(returnFromFetch.errors){
  setErrors(returnFromFetch.errors)
} else {
  history.push(`/groups`)
}

// 3.  thunks
// these functions hit routes
export const thunkCreate = () => async (dispatch, getState) => {
  const res = await fetch("/api/groups");
  
  if(res.ok) {
    const { Groups } = await res.json(); // { Groups: [] }
    // do the thing with this data
    dispatch(actionLoadGroups(Groups))
    return Groups
  } else {
    const errors = await res.json();
    return errors
  }
}



// group slice = { allGroups: {}, singleGroup: {} }
// 3.  reducer
const initialReducerValue = { user: null }
export default function sessionReducer(state=initialReducerValue, action) {
  switch(action.type){
    case CREATE: {
      return state
    }
    case LOAD_GROUPS: {
      const newState = { ...state, allGroups: {} }
      // normalize this array into state
      action.payload.forEach((groupObj) => {
        newState.allGroups[groupObj.id] = groupObj
      })
      return newState
    }
    default: {
      return state
    }
  }
}