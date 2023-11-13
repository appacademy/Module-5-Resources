import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link, NavLink, Outlet } from 'react-router-dom';
import FancyNav from './components/FancyNav';
import Input from './components/Input';
import SomewheresElse from './components/SomewheresElse';
import LegacyReact from './components/LegacyReact';

const router = createBrowserRouter(createRoutesFromElements(
  <Route path='/' element={<Layout />}>
    <Route index element={<h2>home page</h2>} />
    <Route path='somewheres-else' element={<SomewheresElse />} />
    <Route path='nested'>
      <Route index element={<h1>hi from nested!</h1>} />
      <Route path='route' element={<Input />} />
    </Route>
    <Route path='/classes' element={<LegacyReact />} />
    <Route path='*' element={<h1>oops that is a 404!</h1>} />
  </Route>
))

function Layout() {
  return (
    <>
      <FancyNav />
      <Outlet />
    </>
  )
}

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <FancyNav />,
//   },
//   {
//     path: "/somewheres-else",
//     element: <SomewheresElse />
//   },
//   {
//     path: "/nested",
//     children: [
//       {
//         index: true,
//         element: (
//           <h1>hi from nested</h1>
//         )
//       },
//       {
//         path: "route",
//         element: <Input />
//       }
//     ],
//   },
//   {
//     path: "/classes",
//     element: <LegacyReact />
//   },
//   {
//     path: "*",
//     element: (
//       <h1>hi from 404</h1>
//     ),
//   },
// ]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;


/*

import * as React from "react";
import * as ReactDOM from "react-dom";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root, { rootLoader } from "./routes/root";
import Team, { teamLoader } from "./routes/team";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    loader: rootLoader,
    children: [
      {
        path: "team",
        element: <Team />,
        loader: teamLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

*/