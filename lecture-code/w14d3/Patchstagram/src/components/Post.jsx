// import Comment from "./Comment";
import { useNavigate } from "react-router-dom";
import "./Post.css"


export default function Post({ data }) {
    const { id, title, author, image, date } = data
    const navigate = useNavigate()

    return (
        <div className="post-container"
            onClick={ () => navigate(`/posts/${id}`) }
        >
            <div className="post-header">
                <div className="user-info">
                    <img
                        src={author.profile}
                        alt="user-profile"
                        className="profile-image"
                    />
                    <h2>{ author.username }</h2>
                </div>
                <h3>{date.toDateString()}</h3>
            </div>
            <div className="post-body">
                <h2>{ title }</h2>
                <img 
                    src={image} 
                    alt="main-post-iamge"
                    className="content-image" 
                />
            </div>
            {/* <div className="comment-container">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div> */}
        </div>
    );
}