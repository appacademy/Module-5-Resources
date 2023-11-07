import {
  Outlet,
  createRoutesFromElements,
  createBrowserRouter,
  RouterProvider,
  Link,
  NavLink,
  Route,
} from "react-router-dom";
import "./App.css";
import BrokenComponent from "./BrokenComponent";

//todo: organize the UI jsx into their own components

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <>
            <h3>This is the nav</h3>
            <span>
              Enter <NavLink to="/cats">/cats</NavLink>.
            </span>
          </>
        }
        errorElement={
          <>
            <h2>oops that was an error :(</h2>
          </>
        }
      ></Route>
      <Route
        path="/cats"
        errorElement={
          <>
            <h2>oops that was an error somewhere in /cats routes :(</h2>
          </>
        }
      >
        <Route
          index
          element={
            <div>
              <h2>
                hi! <Link to="random">click me</Link> to see a random cute cat!
              </h2>
              <Outlet />
            </div>
          }
        />
        <Route
          path="random"
          errorElement={
            <>
              <h2>hitting nested error</h2>
            </>
          }
          // element={
          //   <div>
          //     <h1>you&apos;ve discovered the random cat page!</h1>
          //     <img />
          //     {(() => { throw new Error("image not found")})()}
          //   </div>
          // }
          element={<BrokenComponent />}
        />
      </Route>
      <Route path="*" element={<h1>yo this is the 404 page!</h1>}></Route>
    </>
  )
);

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        fallbackElement={<h1>Hang on it&apos;s working!</h1>}
      />
    </>
  );
}

export default App;

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: (
//       <div>
//         <h1>this is the home page!</h1>
//       </div>
//     )
//   },
//   {
//     path: "/cats",
//     element: (
//       <div>
//         <h2>hi! <Link to="random">click me</Link> to see a random cute cat!</h2>
//         <Outlet />
//       </div>
//     ),
//     children: [
//       {
//         path: "random",
//         element: (
//           <div>
//             <h1>you&apos;ve discovered the random cat page!</h1>
//             <img />
//           </div>
//         )
//       },
//     ]
//   },
//   {
//     path: "*",
//     element: (<h1>yo this is the 404 page!</h1>)
//   },
// ])
