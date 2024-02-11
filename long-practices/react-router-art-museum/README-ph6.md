# Art Museum, Phase 6: `ArtDescription`

In Phase 6, you will create and render the `ArtDescription` component as a child
route of `galleries/:galleryId`.

## Overview

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instruction below):

1. Create a basic `ArtDescription` component.
2. Render the `ArtDescription` component at the correct route.
3. Fill out the component.
4. Handle errors.

## 1. Create a basic `ArtDescription` component

The last component you will create is the `ArtDescription` component. This
component will appear at `/galleries/:galleryId/art/:artId` (see next step) and
provide details on the artwork at the specified `:artId` path parameter.

Set up the component file in the __components__ folder just as you did for the
other components you created. Have it take a `galleries` prop and, for now, just
return placeholder text.

## 2. Render the `ArtDescription` component at the correct route

This component will be rendered at the `/galleries/:galleryId/art/:artId` route.
Since you already have a route for the first half of this route--i.e.,
`galleries/:galleryId`--use nested routes here.

As you did with the `Layout` route, you create nested routes by defining the
route objects as `children` of the parent route. Move the `GalleryView` element
into a child route. Then create a second child route for the `ArtDescription`
element.

**Hints:**

* What `element` do you want to render at the `galleries/:galleryId` route?
  (Think about it this way: What element that you have already used signifies
  that you want to render a child element?)  
  __Note:__ You could also just omit the `element` for `galleries/:galleryId`
  if you only want to render children routes.
* Paths in nested routes are all relative to the parent route, so you don't need
  to specify `/galleries/:galleryId` in the children's paths.
* You will probably want to use the `index` keyword somewhere. Look this up in
  the docs.
* Final '/'s in route paths are optional.

## 3. Fill out the component

Once you have your `ArtDescription` component rendering at the correct route,
finish filling out the component. **Do NOT check that `:galleryId` and `:artId`
are valid.** (You will do that in the next step.) It should do the following:

* Render a `Link` back to the `/galleries/:galleryId` page.  
  * Make the text of this `Link` "Back to Gallery". (Feel free to use the name
    of the gallery in this text if you prefer.)
  * Don't specify the absolute path--i.e., `/galleries/:galleryId`--in the `Link
    to`. Instead, use a relative path.
    > **Note:** Although it is a relative path, `galleries/:galleryId` will not
    > work because the router will think that it should append that (relative)
    > path to the current route, producing something like
    > `http://localhost:5173/galleries/3700/art/312121/galleries/3700`. You need
    > a way to climb back up the path tree. To the docs!
* Render the title of the artwork wrapped in an external link to the actual
  artwork page in the Harvard Art Museum.
* Render the description, the credit, the technique, and all the images of the
  artwork.

With the exception of the relative path, you have done all of these things
before. If you get stuck, refer to your other files to identify the patterns you
need. Look at the art object closely for all the information you could
visualize. Especially that `.images` array. `.map` over that!

> **Note:** You should use `useParams` to get the gallery and art ids, but this
> will only work if you correctly set up the route in the previous step.

Test the component by navigating to one of the art galleries from the navigation
bar and clicking on one of the artworks. It should direct you to a path that
matches the `/galleries/:galleryId/art/:artId` pattern.

## 4. Handle errors

In contrast to what you did for `GalleryView`, you were advised above **not** to
validate your gallery and art ids in `ArtDescription`. As a result, trying to
access a page with an invalid gallery or art id--e.g.,
[http://localhost:5173/galleries/3700/art/3121219]--will crash your app with an
"Unexpected Application Error!". (Go ahead, try it.)

Whenever an exception is thrown while rendering a route, the route will
render a specified [`errorElement`] instead of the specified `element`. If the
route does not have a specified `errorElement`, then the error will bubble up
the route tree until it either hits a route with a specified `errorElement` or
hits the root of the tree and renders the default `errorElement` (the source of
your "Unexpected Application Error!" message above). This makes it extremely
easy to handle errors in your routes.

Let's use an `errorElement` to handle bad ids in `ArtDescription`.

Open __App.jsx__ and create a quick `PageMissing` component:

```jsx
// src/App.jsx

function PageMissing() {
  return <h2>Page Not Found</h2>;
}
```

You can now use this `PageMissing` component as your `errorElement`. While you
could add it to your `ArtDescription` route, let's add it to the parent route
instead:

```jsx
      {
        path: "/galleries/:galleryId", 
        errorElement: <PageMissing />,
        children: [
          // ...
        ]
      }  
```

Now if you go to [http://localhost:5173/galleries/3700/art/3121219], the error
that occurs when you try to access inside an undefined artwork will cause the
`/galleries/:galleryId` route to render the specified `errorElement`--namely,
`PageMissing`--instead of the `ArtDescription` element of the matched child
route. You should accordingly see your list of `NavLink` "Galleries"
accompanied by "Page Not Found".

> **Note:** The list of galleries still appears because the `errorElement`
> only replaces the `/galleries/:galleryId` route that `Layout` renders as its
> `Outlet` child.

Try visiting a route to a non-existent gallery such as
[http://localhost:5173/galleries/37001]. The "Page Not Found" does not appear
even though this route is also a child of the route with the `errorElement`.
Why does an invalid gallery id not trigger the error handling? (**Hint:** Look
at the code in your `GalleryView` component.)

Next, try visiting a link that has the gallery information correct but not the
art information, something like [http://localhost:5173/galleries/3700/a]. You
should see your list of galleries on an otherwise blank page. The URL does not
match any full route paths, so why doesn't the `errorElement` on the
`galleries/:galleryId` route display?

It doesn't display because the URL actually does match a specified route path,
namely, `galleries/:galleryId`. It is that route's `Outlet` that finds no
matching children, but an unmatched `Outlet` simply renders nothing, hence the
(mostly) blank page. To catch this type of error, you will need to add another
child route to `galleries/:galleryId`, a catchall route:

```jsx
        {
          path: "*",
          element: <PageMissing />
        }
```

Finally, an `errorElement` will render for bad HTTP status responses. (You can
use [`isRouteErrorResponse`] to determine if the triggering error is a route
error response.) To see this, comment out the top-level route for `*`--i.e.,
the one inside the `Layout` route--in `createBrowserRouter` and instead add
`PageMissing` as the `errorElement` on the root route:

```jsx
// src/App.jsx

    {
      element: <Layout />,
      errorElement: {<PageMissing />},
      // ...
    }
```

Now navigate your browser to a non-existent route like
[http://localhost:5173/not-found]. You should see a blank page stating only
"Page Not Found". (Notice no gallery list this time. Why?)

To access the actual error message, use the `useRouteError` hook. For example,
you can import `useRouteError` from `react-router-dom` and use it to
`console.log` the error in `PageMissing` if the error is a route error response:

```jsx
// src/App.jsx

function PageMissing() {
  const error = useRouteError();
  if (isRouteErrorResponse(error))
    console.log(`${error.status} ${error.statusText} ${error.data}`);
  return <h2>Page Not Found</h2>;
}
```

Refreshing the browser at [http://localhost:5173/not-found] when your DevTools
console is open should now show you the actual error object. If you look to the
console, you will see that the error prompting this render was a `404` (i.e.,
"Not Found") response to your HTTP request.

Of course, these are fairly blunt examples of what you can do. Feel free to fine
tune your error handling to address different kinds of errors. You could even
create different `errorElement`s for different routes!

## Wrap up

Great job, you've worked hard! Be proud of your progress today. Take a mental
break to scan through all the beautiful art.

[`errorElement`]: https://reactrouter.com/en/main/route/error-element
[http://localhost:5173/not-found]: http://localhost:5173/not-found
[http://localhost:5173/galleries/3700/art/3121219]: http://localhost:5173/galleries/3700/art/3121219
[http://localhost:5173/galleries/3700/a]: http://localhost:5173/galleries/3700/a
[http://localhost:5173/galleries/37001]: http://localhost:5173/galleries/37001
[`isRouteErrorResponse`]:
    https://reactrouter.com/en/main/utils/is-route-error-response
