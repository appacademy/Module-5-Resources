# Art Museum, Bonuses

This project has two bonus phases, converting your route objects to routes and
adding CSS.

## Bonus 1: Convert route objects to `Routes`

If you've made it this far, you've done a great job constructing your route
objects. As mentioned at the beginning, however, you can also define routes
using JSX. For this first bonus, try your hand at converting from route
objects to `Route`s.

To begin, copy your __App.jsx__ to a new file, __AppBonus.jsx__, and import
`App` from the new file in __main.jsx__.

Inside __AppBonus.jsx__, you will want to change what you pass to
`createBrowserRouter`. You will now need to construct `Route` elements that you
pass to [`createRoutesFromElements`], which will transform the JSX into the
expected array of route objects. To get you started, here is what the project's
initial default route would look like in JSX:

```jsx
// src/AppBonus.jsx

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="*" element={<h2>Page Not Found</h2>} />
  )
);
```

> __Note:__ You will need to import both `createRoutesFromElements` and `Route`
> from `react-router-dom`.

The conversion should be fairly straightforward; see this [comparison] of the
two methods for the basic idea. The biggest difference is that you will no
longer define nested routes in an array named `children` but will instead just
nest them inside the parent `Route`'s opening and closing tags.

Once you finish, run your app and make sure all the routes still work as they
did before!

## Bonus 2: CSS

CSS is an important part of any web application project. Take some time to style
your project! Add cool hover effects with tooltips or animations if you want
more of a challenge!

[`createRoutesFromElements`]: https://reactrouter.com/en/main/utils/create-routes-from-elements
[comparison]: https://reactrouter.com/en/6.15.0/utils/create-routes-from-elements
