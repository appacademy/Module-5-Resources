import Post from "./Post"
import "./Feed.css"

export default function Feed({ data }) {
    const compare = (a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) === new Date(b.date)) return 0;
    };
    const sortedFeed = data.sort(compare)
    return (
        <div className="feed-container">
            
            { sortedFeed.map( post => (
            <Post data={ post } key={ post.id }/>
        ))}
        </div>
    )
} 