# Art Museum, Phase 4: `GalleryView`

In Phase 4, you will finally create the `GalleryView` component to render the
`/galleries/:galleryId` route and show the details about the specific gallery
with the matching `galleryId` in the URL parameter.

## Overview

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instructions follow):

1. Create the `GalleryView` component with placeholder content (`h1`).
2. Add the `GalleryView` route to `App`.
3. Use `useParams` to access the gallery ID value from the URL and display
   information about the specified gallery.
4. `Navigate` home if the gallery does not exist.

## 1. Create the `GalleryView` component

Create a folder in __components__ called __GalleryView__ containing a
__GalleryView.jsx__ file. Inside the file, make a function component called
`GalleryView` that renders `<h1>Hello from GalleryView</h1>`. Export the
component as default.

As before, if you want to make importing your `GalleryView` a little bit easier,
you can also create an __index.js__ file that imports and exports the
`GalleryView`.

## 2. Add `GalleryView` to `App` in a route

Import the `GalleryView` component into `App` and render it at the
`galleries/:galleryId` route.

Remember your `NavLink`s in `GalleryNavigation`? This route is where they will
lead! Click on a link to a gallery in the navigation bar. You should see the
text, "Hello from GalleryView".

## 3. `useParams`

In the `GalleryView` component, extract the matched value for the `galleryId`
URL parameter with the `useParams` hook from React Router. Print this value and
make sure it looks correct in the browser's DevTools console. See how far you
can get with just [the documentation][use-params]. Ask an Instructor if you
get stuck! Again: the param you are looking for is `galleryId`! (You set the
parameter's name in the route `path` that you specified in __App.jsx__.)

To get the information on the art gallery with the specified `galleryId`, the
`GalleryView` component needs to find the art gallery from the list of art
galleries. The data for art galleries lives in the `App` component. Similarly to
how you passed the `galleries` information into the `GalleryNavigation`
component--refer back if you don't remember the specifics--now pass the
`galleries` information into the `GalleryView` component.

In the `GalleryView` component, extract the gallery with the specified
`galleryId` from the list of galleries in the `galleries` prop. Confirm that it
is the desired gallery by using the DevTools (either `debugger` or using
`console.log`).

**Tips:**

- There are many ways to find a value in an array, but `.find` would be a
  particularly apt choice here.
- Be careful with the data type of your ID. Make sure you are not comparing
  numbers to strings that merely resemble numbers!!

Finally, render the name of the specified gallery in `h2` tags. Make sure
that the name changes whenever you navigate to a different gallery from the
navigation bar.

## 4. `Navigate` home if no gallery

What happens if the `:galleryId` does not match any gallery? In this case, use
[`Navigate`] to redirect the user to the home page. Make sure that if you hit
the back button after such a redirection to home, you return to the last valid
page and not to the page with the invalid id.

Everything working? Great! Commit your code, then press on to Phase 5!

[use-params]: https://reactrouter.com/en/main/hooks/use-params
[`Navigate`]: https://reactrouter.com/en/main/components/navigate
