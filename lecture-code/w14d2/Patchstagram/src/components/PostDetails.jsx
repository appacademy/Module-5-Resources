import { useParams, useNavigate } from "react-router-dom"
import Comment from "./Comment"

export default function PostDetails({ data }) {

        const navigate = useNavigate()
        const { postId } = useParams() 
        console.log(postId)
        const postData = data.find((post) => post.id === +postId)
        console.log("post Data", postData)
        return (
            <div 
                style={{ border: "1px solid white"}} 
                onClick={ () => navigate("/posts")}
            >
                <h1>Post Details</h1>
                <h3>{ postData.title }</h3>
                 <p>Author: {postData.author}</p>
            { postData.comments.map( (comment, index ) => (
                <Comment key={ index }comment={comment } />
            ))}
            </div>
        )
}