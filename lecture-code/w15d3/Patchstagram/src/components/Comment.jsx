import "./Comment.css"

export default function Comments({ comment }) {


    return (
        <div className="comment-body">
            <h4>{ comment }</h4>
        </div>
    )
}