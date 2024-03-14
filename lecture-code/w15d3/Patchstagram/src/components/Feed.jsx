import Post from "./Post"
// import { usePostsContext } from "../context/PostsContext";
import { useSelector, useDispatch } from 'react-redux'
import { getAllPosts } from "../store/postsReducer"
import { useEffect } from 'react'
// import seedPosts from '../data'
import "./Feed.css"

export default function Feed() {
    // const { posts } = usePostsContext()
    const postsObj = useSelector( state => state.postsState.posts)
    const posts = Object.values(postsObj)
    const dispatch = useDispatch()

    useEffect( () => {
        dispatch(getAllPosts())
    }, [dispatch])

    const compare = (a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) === new Date(b.date)) return 0;
    };
    const sortedFeed = posts.sort(compare)

    if (!posts.length) return null

    return (
        <div className="feed-container">
            {/* <h1>{ posts[1].title }</h1> */}
            { sortedFeed.map( post => (
            <Post data={ post } key={ post.id }/>
        ))}
        </div>
    )
} 