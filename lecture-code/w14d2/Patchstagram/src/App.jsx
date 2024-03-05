import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Post from './components/Post'
import Landing from './components/Landing'
import Feed from './components/Feed'
import PostForm from './components/PostForm'
import Layout from './components/Layout'
import someData from "./data"
import './App.css'
import PostDetails from './components/PostDetails'
// import PurpleWrapper from './components/PurpleWrapper'


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    element: <Layout />,   // NavBar
    children: [
      {
        path: 'feed',
        element: <Feed data={ someData } />
      },
      {
        path: 'feed/:postId',
        element: <PostDetails data={ someData } />
      },
      {
        path: 'new',
        element: <PostForm />
      },
    ]
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }
])


function App() {
  // console.log(someData)

  // const handleClick = (e) => {
  //   console.log("we clicked the button!")
  //   alert("One day we will have this navigate somewhere...")
  // }

  return (
    <>
      <RouterProvider router={ router } />
      {/* <Link to="/feed">Feed</Link> */}
      {/* <h1>Welcome to Patchstagram!</h1>
      <img  
        style={{height: "300px"}}
        src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" alt="kitty-image" 
      />
      <button onClick={ (e) => handleClick(e) }>Enter Site</button> */}
      {/* <Post data={someData[0]} />
      <PurpleWrapper>
        <Post data={someData[1]} />
        <Post data={someData[2]} />
      </PurpleWrapper>
      <Post data={someData[3]} />
      <Post data={someData[4]} /> */}
      {/* <Post />
      <Post />
      <Post /> */}
      {/* { someData.map( post => (
        <Post data={ post } key={ post.id }/>
      ))} */}
    </>
  )
}

export default App
