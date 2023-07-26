// imports

//!! SIGNATURES

// 1.  types - they must be UNIQUE
const CREATE = "session/create_user"


// 2.  action creator
export const actionCreate = () => ({
  type: CREATE
})



// 3.  reducer
export default function sessionReducer(state, action) {
  switch(action.type){
    case CREATE: {
      return state
    }
    default: {
      return state
    }
  }
}