# Art Museum Project

In this project, you will create React components to build a purely frontend
application that displays a list of art galleries. Using the React Router
library, you will enable a user to navigate through the different art galleries
to see images and descriptions of their respective art pieces. The information
about the art galleries will be seeded using data extracted from the [Harvard
Art Museum API].

## Learning goals

By the end of the project, you should understand and be able to use the
following React Router functions, components, and hooks:

* `createBrowserRouter`
* `RouterProvider`
* `Outlet`
* `NavLink`
* `Link`
* `Navigate`
* `useParams`
* `createRoutesFromElements` (Bonus)
* `Route` (Bonus)

You will also learn how to specify unique keys when creating arrays of JSX
elements to render.

## Phase 0: Setup

In this initial phase, you will set up a basic React app skeleton that you will
then build out in the following phases. Here's a breakdown of the steps you'll
be taking in this phase (more detailed instructions follow):

1. Create a new React project using `create-react-app`!
2. Install React Router.
3. Start the development server.
4. Set up the `<App>` component for routing.
5. Import seed data.

### 1. Create a new React project

Begin by creating a new React project called `art-museum` using App Academy's
React 18 Vite template:

```bash
npx tiged appacademy/aa-react18-vite-template art-museum
```

### 2. Install React Router

Once the project has been created, `cd art-museum` and then `npm install
react-router-dom` to install the React Router library.

### 3. Start the development server

Take a look at the code in your entry file (__src/main.jsx__).

Using `document.getElementById`, it first grabs a single HTML DOM element to use
as the root for your React elements. In this case, it selects the HTML DOM
element with the `id` of `root`. (You can find this DOM element in
__index.html__. It is the empty `div` on line 10: `<div id="root"></div>`.)

The [`ReactDOM.createRoot`] command transforms this DOM element into a React
root capable of displaying your React elements inside it. The `render` method
then gives the root the React component--at the moment, `<App />`--to display.
Remember: React elements are __not real__ HTML DOM elements. Behind the scenes,
React takes the rendered React elements and turns them into actual HTML DOM
elements.

To get your project up and running so you can see it in the
browser, start the development server by running:

```bash
npm run dev
```

Now you should see "Hello from App" when you navigate to
[http://localhost:5173]. Congrats! You have a built a functional React App!

### 4. Set up `App` for routing

Next you want to set up your `App` component with a router to simulate
navigation in a _Single Page App (SPA)_. (This frontend navigation is
__simulated__ because a user is not actually going to different webpages when
they visit different areas of your site; React is just swapping the relevant
content in and out of the single webpage.)

Go to __App.jsx__ and import `createBrowserRouter` and `RouterProvider` from
`react-router-dom` at the top of the file.

First you need to create your router using [`createBrowserRouter`].
`createBrowserRouter` takes an array of Route objects as an argument. This
argument is where you will define all of the routes for your application.

For now, let's just define a default route that returns an `h2` stating "Page
Not Found". You can do this in one of two ways:

1. Build a route object yourself
2. Implement your routes using JSX and pass them to `createRoutesFromElements`

React Router expresses no preference for one option over the other. Since the
route-object approach is more native to Router v6.4+, this practice adopts the
former approach throughout. The Bonus phase, however, will give you the chance
to try converting your routes to JSX, an especially helpful skill for dealing
with legacy projects.

Taking the route-object approach, then, your default path should look like this:

```jsx
// src/App.jsx

const router = createBrowserRouter([
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
]);
```

Once you have created your router, pass it to `RouterProvider` as the `router`
prop. Then return that component from `App` instead of the "Hello from App"
`h1`. Your __App.jsx__ should now look something like this:

```jsx
// src/App.jsx

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const router = createBrowserRouter([
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
]);

function App() {
  return <RouterProvider router={router}/>;
}

export default App;
```

If you refresh your browser at [http://localhost:5173], you should now see "Page
Not Found".

### 6. Import seed data

Finally, you need to import some seed data to use in your application.

Make a folder in __src__ called __data__. To contain the art data, create a file
called __harvardArt.js__ inside the newly created __data__ folder. Then run the
following command from the root of your project, i.e., in the __art-museum__
directory.

```sh
curl https://appacademy-open-assets.s3-us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/intro-to-react/projects/art-museum/harvardArt.js > src/data/harvardArt.js
```

Take a look at the imported data. Note the structure of the object and the
export statement at the bottom of the file!

Import the exported object from this file into __src/App.jsx__ and name
the object `harvardArt`. `console.log` the `harvardArt` object. Go to
[http://localhost:5173] and open the browser's DevTools console. There you
should see the printed `harvardArt` object. The `records` key in that object is
an array of information on Harvard's art galleries. The `objects` key in each
art gallery is an array of information on the gallery's art pieces. You'll be
using this data throughout the project, so get familiar with the structure of
this data!

When you feel comfortable with the structure of the data, go ahead and remove
the `console.log`.

Setup is complete! You're ready for Phase 1!

[http://localhost:5173]: http://localhost:5173
[Harvard Art Museum API]: https://www.harvardartmuseums.org/collections/api
[`ReactDOM.createRoot`]: https://react.dev/reference/react-dom/client/createRoot
[`createBrowserRouter`]: https://reactrouter.com/en/main/routers/create-browser-router
