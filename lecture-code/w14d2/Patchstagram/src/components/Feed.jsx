import Post from "./Post"


export default function Feed({ data }) {

    return (
        <div>
            <h1>This will be our feed</h1>
            { data.map( post => (
            <Post data={ post } key={ post.id }/>
        ))}
        </div>
    )
} 