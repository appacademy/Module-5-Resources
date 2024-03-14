import { useState, useEffect } from 'react'
// import { users } from "../data"
import { useNavigate } from 'react-router-dom'
// import { usePostsContext } from '../context/PostsContext'
import { useDispatch, useSelector } from 'react-redux'
import { createPost } from "../store/postsReducer"
// import someData from '../data'


export default function PostForm() {
    // const { posts, setPosts }= usePostsContext()
    // const posts = useSelector(state => state.postsState.posts)
    const users = useSelector(state => state.usersState.users)
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()


    useEffect( () => {
        const errors = {};
        if (!title.length) errors.title = "Please enter a post title!"
        if (!image.length) errors.image = "Please provide an image URL!"  
        setValidationErrors(errors)
    }, [title, image])


    const handleSubmit = async (e) => {
        e.preventDefault()
        setHasSubmitted(true)

        if (Object.values(validationErrors).length) 
        return alert(`The following errrors were found:
        ${validationErrors.title ? "* " + validationErrors.title : ""}
        ${validationErrors.image ? "* " + validationErrors.image : ""}
        
        `)


        const selectedUser = users.find( user => user.name === author)
        console.log(selectedUser)

        const newPost = {
            title,
            image,
            author: selectedUser.id,
        }

        console.log("NEW POST", newPost)
        /* we need to push this because we are using the seed data to 
        populate load posts in our Feed, so the next time feed renders 
        if the new post is not added to that seed data, it won't appear in the Feed */
        // someData.push(newPost) 
        // setPosts([...posts, newPost])
        const response = await dispatch(createPost(newPost))
        if (response === true ){
            setAuthor('')
            setTitle('')
            setImage('')
            navigate("/feed")
        } else {
            console.log("ERROR RESPONSE", response)
            setValidationErrors(response)
        }
    }

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <label htmlFor="title">Title:</label>
                    <input
                        id="title"
                        type="text"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder='title'
                    />
                </div>
                <div style={{color: "red"}}>
                    { hasSubmitted && validationErrors.title }
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input
                        id="image"
                        type="text"
                        value={ image }
                        onChange={ (e) => setImage(e.target.value) }
                        placeholder='Image Url'
                    />
                </div>
                <div style={{color: "red"}}>
                    { hasSubmitted && validationErrors.image }
                </div>
                <div>
                    <label htmlFor='author'>Author</label>
                    <select
                        name="author"
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value)}
                    >
                        <option value="" disabled > Select an author...</option>
                        { users.map( (user, index) => (
                            <option key={ index }>{ user.name }</option>
                        ))}
                    </select>
                </div>
                <button>Submit</button>
            </form>
        </div>
    )
} 