import { createContext, useContext, useState } from "react";
import someData from "../data"


const PostContext = createContext();

export const usePostsContext = () => useContext(PostContext)


export default function PostsProvider({ children }) {
    const [posts, setPosts] = useState(someData)

    return (
        <PostContext.Provider value={{ posts, setPosts }}>
            { children }
        </PostContext.Provider>
   )
}