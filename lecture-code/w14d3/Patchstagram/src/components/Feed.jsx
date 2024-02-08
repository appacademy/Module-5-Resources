import Post from "../components/Post"


export default function Feed({data}) {
    const compare = (a, b) => {
        if (new Date(a.date) < new Date(b.date)) return 1;
        if (new Date(a.date) > new Date(b.date)) return -1;
        if (new Date(a.date) === new Date(b.date)) return 0;
    };
    const sortedFeed = data.sort(compare)
    return (
        <div>
            { sortedFeed.map((postData) => (
                <div key={postData.id}>
                    <Post data={postData} />
                </div>
            ))}
        </div>
    )
}