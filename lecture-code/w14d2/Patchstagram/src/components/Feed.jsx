import Post from "./Post"


export default function Feed({ data }) {

    return (
        <>
            { data.map((post) => (
                <Post key={post.id} data={post} />
            ))}
        </>
    )
}