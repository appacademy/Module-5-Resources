import { useState, useEffect } from 'react'
import someData, { users } from "../data"
import { useNavigate } from 'react-router-dom'

export default function PostForm() {
    const [title, setTitle] = useState("")
    const [image, setImage] = useState("")
    const [author, setAuthor] = useState("")
    const [validationErrors, setValidationErrors] = useState({})
    const [hasSubmitted, setHasSubmitted] = useState(false)
    const navigate = useNavigate()



    useEffect( () => {
        const errors = {};
        if (!title.length) errors.title = "Please enter a post title!"
        if (!image.length) errors.image = "Please provide an image URL!"  
        setValidationErrors(errors)
    }, [title, image])


    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(title, image, author)
        setHasSubmitted(true)

        if (Object.values(validationErrors).length) 
        return alert(`The following errrors were found:
        ${validationErrors.title ? "* " + validationErrors.title : ""}
        ${validationErrors.image ? "* " + validationErrors.image : ""}
        
        `)


        const selectedUser = users.find( user => user.name === author)
        console.log(selectedUser)

        const newPost = {
            id: someData.length + 1,
            title,
            image,
            author: selectedUser,
            date: new Date(),
            comments: [],
            likes: Math.floor(Math.random() + 10)
        }
        console.log(newPost)
        someData.push(newPost)
        setAuthor('')
        setTitle('')
        setImage('')
        navigate("/feed")
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