import { createBrowserRouter, RouterProvider, createRoutesFromElements, Route, Link, NavLink } from 'react-router-dom';
import FancyNav from './components/FancyNav';
import Input from './components/Input';
import SomewheresElse from './components/SomewheresElse';

const router = createBrowserRouter([
  {
    path: "/",
    element: <FancyNav />,
  },
  {
    path: "/somewheres-else",
    element: <SomewheresElse />
  },
  {
    path: "/nested",
    children: [
      {
        index: true,
        element: (
          <h1>hi from nested</h1>
        )
      },
      {
        path: "route",
        element: <Input />
      }
    ],
  },
  {
    path: "*",
    element: (
      <h1>hi from 404</h1>
    ),
  },
]);

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