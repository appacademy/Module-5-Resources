import Post from "./components/Post"
import PurpleWrapper from "./components/PurpleWrapper"
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom"
import './App.css'
import Landing from "./components/Landing"
import Feed from "./components/Feed"
import PostForm from "./components/PostForm"
import Layout from "./components/Layout"
import PostDetails from "./components/PostDetails"


function App() {
 
  const postData = [
    {
      id: 1,
      title: "How tasty is bacon?",
      author: 'Brad',
      comments: ['So yum!', "More please!", "I don't like it"]
    },
    {
      id: 2,
      title: "Pokemon is awesome!",
      author: 'Keegan',
      comments: ["Go Squirtle!", "Bulbasaur rocks!", "Welcome to Pokemon Talk!"]
    },  
    {
      id: 3,
      title: "I like coffee",
      author: 'Brad',
      comments: ["Cup of Joe!", "Mmmmmmm", "I like tea"]
    },  
    {
      id: 4,
      title: "The cohort 3 cycles ago was the worst ever",
      author: 'Jefferson',
      comments: ["How do you remember that stuff?", "yes!", "Also yes"]
    }  
  ]

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Landing />
    },
    {
      element: <Layout />,
      children: [
        {
          path: 'posts',
          element: <Feed data={ postData } />
        },
        {
          path: 'posts/:postId',
          element: <PostDetails data={ postData } />
        },

        {
          path: 'new',
          element: <PostForm />
        },
      ]
    },
    {
      path: "*",
      element: <h1>Page Not Found</h1>
    }
  ])



  const handleClick = (e) => {

    console.log("we clicked it!", e)
    alert("We made this happen with a button!")
  }

  return (
    <>
      {/* <h1>Welcome to Patchstagram!</h1>
      <img 
        src='https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png'
        alt="tuxedo-cat-image"
        className="landing-logo"
      /> */}
      {/* <h3>{ info }</h3> */}
      {/* <Post data={ postData[0]}/>
      <PurpleWrapper>
        <Post data={ postData[2]}  />  
      </PurpleWrapper>
      <PurpleWrapper>
        <Post data={ postData[3]} />
      </PurpleWrapper> */}
      {/* { postData.map( (post) => (
          <Post key={ post.id } data={ post } />
      ))} */}
      {/* <button onClick={ (e) => handleClick(e) } >Click Me!</button> */}
      <RouterProvider router={ router } />
      {/* <Link to="/posts">Feed</Link> */}
    </>
  )
}

export default App
