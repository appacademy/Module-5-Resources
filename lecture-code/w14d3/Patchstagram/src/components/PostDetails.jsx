import { useParams, useNavigate } from 'react-router-dom'
import Comment from './Comment'


export default function PostDetails({ data }){

    const navigate = useNavigate()
    const { postId } = useParams()
    console.log("post ID:", postId)
    const postData = data.find( (post) => post.id === +postId )
    console.log(postData)
    const { title, author, image, date, comments, likes } = postData

    return (
        <div className="post-container"
            onClick={ () => navigate(-1) }  
            //{replace:true}
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
            <p>Likes: { likes }</p>
            <div className="comment-container">
                {comments.map((comment, index) => (
                    <Comment key={index} comment={comment} />
                ))}
            </div>
        </div>
    )
}