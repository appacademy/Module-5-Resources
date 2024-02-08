import "./Comment.css"

export default function Comment({ comment }) {

    return (
        <div className="comment-box">
            <h4>{comment}</h4>
        </div>
    );
}