# Art Museum, Phase 3: `NavLink`s On Every Page

In Phase 3, you will move your `GalleryNavigation` component so that it renders
on every page. You will also style the active links so users will be able to
tell which link is active.

## Overview

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instructions follow):

1. Create a `Layout` component to render your `GalleryNavigation` component.
2. Render the `Layout` component in `App`.
3. Style `.active` elements with CSS

## 1. Create a Layout component

Your routes in `createBrowserRouter` probably look something like this at the
moment:

```jsx
// src/App.jsx

const router = createBrowserRouter([
  {
    path: "/", 
    element: 
      <>
        <h2>Harvard Art Museum</h2>
        <p>
          Look, but Don&apos;t Touch. Please select a Gallery in the
          navigation bar.
        </p>
      </>
  },
  { 
    path: "galleries", 
    element: <GalleryNavigation galleries={harvardArt.records} />
  },
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
])
```

As discussed at the end of the last phase, you need your `NavLink`s in
`GalleryNavigation` to show up on every page, not just at the `galleries` route.
You could achieve that goal by going into each route's `element` and adding the
`GalleryNavigation` component. While that might be fine for an app that will
only ever have two routes, it is not a very DRY solution and will become
increasingly cumbersome to maintain as more routes are added.

Instead, let's make a `Layout` component that will always render the
`GalleryNavigation` component **and** whatever other element needs to be
rendered for the current route.

To do this, create a function component called `Layout` that returns
`GalleryNavigation` with the appropriate props. (You can do this at the top of
__App.jsx__.) You also want it to return the element for the specified route. To
do this, you will set `Layout` as a parent element whose route wraps all the
other routes in the app. You can then render the appropriate child route in
addition to `GalleryNavigation` through the `Outlet` component.

`Outlet` is a React Router component--you will need to import it from
`react-router-dom`--that essentially renders the appropriate (i.e.,
best-matched) child route in a parent route element. Wrap this component inside
`main` tags and add it to `Layout`'s return statement below `GalleryNavigation`.
Finally, since you can only return one top-level element, you will need to wrap
both components in another element, perhaps a `div` with an appropriate
class name like `page-wrapper`.

When you've finished, your `Layout` component should look something like this:

```jsx
// src/App.jsx

function Layout() {
  return (
    <div className="page-wrapper">
      <GalleryNavigation galleries={harvardArt.records} />
      <main>
        <Outlet />
      </main>
    </div>
  );
}
```

## 2. Render the `Layout` component in `App`

Now you want to render your `Layout` component as the parent element to all of
the routes in your app.

Start by removing the `galleries` route that used to manifest
`GalleryNavigation` from `createBrowserRouter`; you don't need it anymore. Then
make all of the other existing routes `children` of a `path`-less--so always
visible--route with an element of `Layout`. Your `createBrowserRouter` should
now look similar to this:

```jsx
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/", 
        element: 
          <>
            <h2>Harvard Art Museum</h2>
            <p>
              Look, but Don&apos;t Touch. Please select a Gallery in the
              navigation bar.
            </p>
          </>
      },
      { 
        path: "*",
        element: <h2>Page Not Found</h2>
      }
    ]
  }
]);
```

Refresh your browser at [localhost:5173]. You should now see **both** your
`NavLink`s and "Harvard Art Museum". Clicking one of the gallery links should
then leave the `NavLink`s but replace "Harvard Art Museum" with "Page Not
Found". If so, well done!

## 3. Style `.active` elements with CSS

As noted above, `NavLink`s make it easy to show when a link's path matches the
current route. You are going to take advantage of this capability to boldface
the `NavLink`'s text for the current route.

First create a __GalleryNavigation.css__ file in the __GalleryNavigation__
folder. Add styling to boldface elements with the class `active`, i.e.,
`.active`. `.active` is the default active class for `react-router-dom`'s
`<NavLink>` elements.

Import the __GalleryNavigation.css__ file at the top of the
`GalleryNavigation` component file. (See __src/main.jsx__ to see how to import
CSS files into a React JavaScript file.)

In the browser, you should see the active route in boldface in the navigation
bar. Make sure that the `NavLink` to the home page is bolded only at the `/`
route. (If you don't know how to keep the `Home` link from bolding on other
routes, try to find the answer in the React Router docs. If your search proves
fruitless, check out [this part] of the documentation.)

Now's a good time to commit your code. Then it's on to Phase 4!

[localhost:5173]: http://localhost:5173
[this part]: https://reactrouter.com/en/main/components/nav-link#end
