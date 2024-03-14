import Post from "./Post"
import Comment from "./Comment"
import { useParams, Link } from "react-router-dom"
import { useSelector } from "react-redux"

export default function PostDetails(){
    const posts = useSelector( state => state.postsState.posts)
    const { postId } = useParams()
    console.log("postId", postId)
    const postData = posts[postId]
    console.log("IN POST DETAILS", postData)
    // const postData = posts.find( (post) => post.id === +postId)

    return (
        <div className="feed-container">
            <Link to="/feed">Back to feed...</Link>
            <Post data={ postData } />
            <div>
                <p>Likes: { postData.likes }</p>
                { postData.comments.length ? null : <h3>No comments yet...</h3>}
                { postData.comments.map( (comment ) => (
                    <Comment key={ comment.id } comment={ comment.body } />
                ))}
            </div>
        </div>
    )
}