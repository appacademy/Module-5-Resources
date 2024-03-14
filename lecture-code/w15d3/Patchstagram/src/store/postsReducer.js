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


export const getAllPosts = () => async (dispatch) => {
    const response = await fetch("/api/posts/all")

    if (response.ok) {
        const { posts } = await response.json()
        // console.log("GAP RESPONSE", posts)
        dispatch(loadPosts(posts))
    } else {
        const info = await response.json()
        console.log("GAP ERROR RESPONSE", info)
    }
}


export const createPost = (post) => async (dispatch) => {
    const response = await fetch("/api/posts/new", {
        method: 'POST',
        headers: {
            'Accept': "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(post)
    })
    if (response.ok) {
        const { resPost } = await response.json()
        console.log(" CP RESPONSE", resPost)
        dispatch(savePost(resPost))
        return true
    } else {
        const { error } = await response.json()
        console.log("CP ERROR", error)
        return error
    }
}




const initialState = { posts: {} }

const postsReducer = (state = initialState, action) => {
    let newState = {}
    switch(action.type){
        case GET_POSTS:
            newState = {...state}
            action.posts.forEach( (post) => (newState.posts[post.id] = post));
            console.log("NEWSTATE", newState)
            return newState
            // return {...state, posts: [...action.posts]}
        case SAVE_POST:
            newState = {...state}
            newState.posts[action.post.id] = action.post
            console.log("SAVE-POST", newState)
            return newState
            // return {...state, posts:[...state.posts, action.post]}
        default:
            return state
    }
}

export default postsReducer;