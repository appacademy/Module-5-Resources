import { createBrowserRouter, RouterProvider} from "react-router-dom" 
import Landing from "./components/Landing"
import Feed from "./components/Feed"
import PostForm from "./components/PostForm"
import './App.css'
import someData from "./data"
import Layout from "./components/Layout"
import PostDetails from "./components/PostDetails"


const router = createBrowserRouter([
  {
    path: '/',
    element: <Landing />
  },
  {
    element: <Layout />,
    children: [
      {
        path:'/posts',
        element: <Feed data={ someData } />,
      },
      {
        path: "posts/:postId",
        element: <PostDetails data={ someData } />
      },
      {
        path: '/new',
        element: <PostForm />
      },
    ]
  },
  {
    path: '*',
    element: <h1>Page Not Found</h1>
  }
]);


// function PurpleWrapper(props) {
//   console.log(props)
//   return (
//     <div style={{ "color": "purple" }}>
//       {props.children}
//     </div>
//   );
// }



function App() {


  // const handleClick = (e) => {
  //   console.log("in handle click", e.target)
  //   alert("One day this will help us make a new post...")
  // }

  return (
    <>
      {/* <Link to="/posts" ></Link> */}
      <RouterProvider router={ router } />
      {/* <h1>Welcome to Patchstagram!</h1>
      <img style={{ height: "300px" }} src="https://res.cloudinary.com/app-academy4/image/upload/v1647291502/Patchstagram/patch_hd_riobbp.png" />

      {/* <Post data={ someData[0] } moreData={ false } >
        <div>
          <h1>Hello Post!</h1>
          <h2>Whats good?</h2>
        </div>
      </Post>
      <PurpleWrapper>
        <Post  data={ someData[1] }  />
      </PurpleWrapper>
      <Post  data={ someData[2] }  />
      <Post  data={ someData[3] }  /> */}
     {/*}
      <button onClick={ (e) => handleClick(e) }>New Post</button> */}
    </>
  )
}

export default App
