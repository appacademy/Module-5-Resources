import { useState, useEffect } from "react"
import { useNavigate } from 'react-router-dom'
import postData, { users} from "../data"
export default function PostForm() {

    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [errors, setErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const navigate = useNavigate()


    useEffect(() => {
        const errors = {}
        if(!title.length) errors.title = "Please enter a post title"
        if(!image.length) errors.image = "Please provide a image URL"
        setErrors(errors)
    }, [title, image])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log("we submitted")
        setHasSubmitted(true)

        if (Object.values(errors).length)
            return alert(`The following errors were found:
                ${errors.title ? "* " + errors.title : "" }
                ${errors.image ? "* " + errors.image : "" }`)
        
        const selectedUser = users.find( user => user.username === author)
        console.log(selectedUser)

        const newPost = {
            id: postData.length + 1,
            title,
            image,
            author: selectedUser,
            date: new Date(),
            comments: [],
            likes: Math.floor(Math.random() * 10)
        }
        console.log(newPost)
        postData.push(newPost)
        setAuthor("")
        setImage("")
        setTitle("")
        navigate("/posts")

    }

    return (
        <div>
            <h2>Create Post</h2>
            <form onSubmit={ handleSubmit } >
                <div>
                    <label htmlFor="title">Title:</label>
                    <input 
                        id='title'
                        type="text"
                        value={ title }
                        onChange={ (e) => setTitle(e.target.value) }
                        placeholder="title"
                    />
                </div>
                <div className="errors-postform">
                    { hasSubmitted && errors.title }
                </div>
                <div>
                    <label htmlFor="image">Image URL:</label>
                    <input 
                        id='image'
                        type="text"
                        value={ image }
                        onChange={ (e) => setImage(e.target.value) }
                        placeholder="image URL"
                    />
                </div>
                <div className="errors-postform">
                    { hasSubmitted && errors.image }
                </div>
                <div>
                    <label htmlFor="author"></label>
                    <select
                        name="author"
                        value={ author }
                        onChange={ (e) => setAuthor(e.target.value)}
                    >
                        <option value="" disabled>
                            Select an author...
                        </option>
                        { users.map( (user, index) => (
                            <option key={ index }>
                                { user.username }
                            </option>
                        ))}
                    </select>
                </div>

                <button>Submit</button>
            </form>
        </div>
    )
}