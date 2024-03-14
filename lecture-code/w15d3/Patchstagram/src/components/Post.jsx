import { useNavigate } from "react-router-dom"
import { useThemeContext } from "../context/ThemeContext"
import "./Post.css"


export default function Post({data}) {
    const { theme } = useThemeContext()
    const navigate = useNavigate()
    const { id, title, author, image, date } = data


    return(
        <div className={`post-container ${theme}`}
            onClick={ () => navigate(`/feed/${id}`) }
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
            <h3>{ date }</h3>
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
    )
}