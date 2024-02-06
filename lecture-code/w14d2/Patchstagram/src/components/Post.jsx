import Comment from "./Comment"
import "./Post.css"
import { useNavigate } from "react-router-dom"

export default function Post({ data }) {
    // console.log("data",  data.comments)
    const navigate = useNavigate()
    return (
        <div 
            className="post-container"
            onClick={ () => navigate(`/posts/${data.id}`)}
        >
            <h3>{ data.title }</h3>
            <p>Author: {data.author}</p>
            {/* { data.comments.map( (comment, index ) => (
                <Comment key={ index }comment={comment } />
            ))} */}
        </div>
    )
}