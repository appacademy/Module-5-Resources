// import someData from "../data"


const GET_POSTS = 'postsState/get_posts'
const SAVE_POST = 'postsState/save_posts'


export const loadPosts = (posts) => ({
    type: GET_POSTS,
    posts,
})

export const savePost = (post) => ({
    type: SAVE_POST,
    post
})


const initialState = { posts: [] }

const postsReducer = (state = initialState, action) => {
    switch(action.type){
        case GET_POSTS:
            return {...state, posts: [...action.posts]}
        case SAVE_POST:
            return {...state, posts:[...state.posts, action.post]}
        default:
            return state
    }
}

export default postsReducer;