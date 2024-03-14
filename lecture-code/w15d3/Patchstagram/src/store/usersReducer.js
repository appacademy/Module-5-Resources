// import { users } from "../data"


const GET_USERS = "usersState/get_users"
const SET_CURRENT_USER = "usersState/set_current_users"
const LOGOUT_CURRENT_USER = "usersState/logout_current_user"


export const loadUser = (users) => ({
    type: GET_USERS,
    users
})

export const loginUser = (user) => ({
    type: SET_CURRENT_USER,
    user
})

export const logoutUser = () => ({
    type: LOGOUT_CURRENT_USER,
})


// THUNK
export const getAllUsers = () => async (dispatch) => {
    const response =await fetch('/api/users/all');

    if (response.ok) {
        const { users } = await response.json();
        dispatch(loadUser(users))
      
    } else {
        console.log("there was an error fetching!")
    }
} 




const initialState = {users: [], sessionUser: null  }


const usersReducer = (state= initialState, action) => {
    switch(action.type){
        case GET_USERS:
            return {...state, users: [...action.users]}
        case SET_CURRENT_USER:
            return {...state, sessionUser: action.user }
        case LOGOUT_CURRENT_USER:
            return {...state, sessionUser: null }
        default:
            return state
    }
    
}

export default usersReducer


// starting state shape
// const state = {
//     usersState: {
//         users: [],
//         session: null
//     },
//     postsState: []
// }