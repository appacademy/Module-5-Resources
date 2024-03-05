import Post from "./Post"
import Comment from "./Comment"
import { useParams, Link } from "react-router-dom"

export default function PostDetails({data}){
    const { postId } = useParams()
    console.log("postId", postId)
    const postData = data.find( (post) => post.id === +postId)

    return (
        <div>
            <Link to="/feed">Back to feed...</Link>
            <Post data={ postData } />
            <div>
                <p>Likes: { postData.likes }</p>
                { postData.comments.map( (comment, index) => (
                    <Comment key={ index} comment={ comment } />
                ))}
            </div>
        </div>
    )
}