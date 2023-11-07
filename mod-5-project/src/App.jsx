import { Outlet, createRoutesFromElements, createBrowserRouter, RouterProvider, Link } from 'react-router-dom';
import './App.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>this is the home page!</h1>
      </div>
    )
  },
  {
    path: "/cats",
    element: (
      <div>
        <h2>hi! <Link to="random">click me</Link> to see a random cute cat!</h2>
        <Outlet />
      </div>
    ),
    children: [
      // {
      //   path: "random",
      //   element: (
      //     <div>
      //       <h1>you&apos;ve discovered the random cat page!</h1>
      //       <img />
      //     </div>
      //   )
      // },
    ]
  },
  {
    path: "/cats/random",
    element: (
      <h1>this is the alt /cats/random page</h1>
    )
  },
  {
    path: "*",
    element: (<h1>yo this is the 404 page!</h1>)
  },
])

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
