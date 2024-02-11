# Art Museum, Phase 2: `GalleryNavigation`

The first React component you'll create and render in the `App` component is the
`GalleryNavigation` component. This component should be rendered at every route
in the application. It will render links to detail pages for every art gallery.

## Overview

Here's a breakdown of the steps you'll be taking in this phase (more detailed
instructions follow):

1. Create a `components` folder.
2. Create a `GalleryNavigation` component and render it inside `App`.
3. Pass the galleries into `GalleryNavigation` as a prop.
4. Add `NavLink`s to `GalleryNavigation`.

## 1. Create a `components` folder

The first step is easy. To help keep your files organized, make a __components__
folder in __src__. This folder will hold all your React components besides `App`
and `Root`.

## 2. Create a `GalleryNavigation` component

Make a folder called __GalleryNavigation__ in the __components__ folder with a
__GalleryNavigation.jsx__ file inside. You will build your `GalleryNavigation`
component inside this file.

If you want to make importing a little bit easier, you can also create an
__index.js__ file with the following code:

```js
import GalleryNavigation from './GalleryNavigation';

export default GalleryNavigation;
```

This __index.js__ file allows you to import the `GalleryNavigation` component
simply by the directory name (because specifying a directory name will always
return an __index.js__ file if there is one). The following two `import`
statements show how you would import the `GalleryNavigation` component into
__App.jsx__ both if there is an __index.js__ and if there is not:

```js
// src/App.jsx

// If GalleryNavigation/ has an index.js file, use this form:
import GalleryNavigation from './components/GalleryNavigation';

// If GalleryNavigation/ does not have an index.js file, use this form:
import GalleryNavigation from './components/GalleryNavigation/GalleryNavigation';
```

In the __GalleryNavigation.jsx__ file, define a React function component named
`GalleryNavigation`. Render an `h1` element with the text "Galleries".

Export the component from the file using `export default`. Import the component
into __App.jsx__ and render it at a path of `galleries`. You will change how
this component is rendered in a bit, but for now, you just want to render it at
a route you can test.

> **Note:** The `path` prop of a route component works a lot like the
> definition of a regular backend route!

Go to [http://localhost:5173/galleries]. If you see "Galleries" displayed on the
page, then you have successfully rendered a new component in `App`!

## 3. Pass the galleries into `<GalleryNavigation>` as a prop

The `GalleryNavigation` component needs to have access to the names and ids of
the galleries. The galleries data is in the __App.jsx__ file. You can pass that
data into the `GalleryNavigation` component through the component's props.

From __App.jsx__, pass a `galleries` prop into the `GalleryNavigation` component
with the value of `harvardArt.records`. Then, in __GalleryNavigation.jsx__,
destructure `galleries` from the props of `GalleryNavigation`.

Test to make sure you are passing the prop correctly. Put a `debugger` or
`console.log(galleries)` at the top of the `GalleryNavigation` component and
refresh [http://localhost:5173/galleries]. When you open up your browser's
DevTools console, `galleries` in `GalleryNavigation` should be an array of art
galleries. (Feel free to remove your `debugger`/`console.log` once it has served
its purpose.)

## 4. Add `NavLink`s to `<GalleryNavigation>`

It's time to add some links! Start by adding a `NavLink` to the
`GalleryNavigation` component that directs users to the home page route (`/`). A
`<NavLink>`--which can be imported from the `react-router-dom` library--differs
from a regular `Link` by adding `pending` and `active` classes to links when
they are pending and active, respectively. This allows you to, e.g.,
differentiate active links through CSS. [Check out its documentation][navlink]!

Since there are now two components in your `GalleryNavigation` component, wrap
the `h1` and `NavLink` components in a `nav` (lowercase n!). (A `div` would also
work, but `nav` fits better semantically.)

Next, for each element in the array of art galleries, create a `NavLink`
component that will direct the users to a `/galleries/:galleryId` route where
`:galleryId` is replaced with the art gallery's id. The text inside of the
`NavLink` should be the gallery's name.

Here are some tips for creating these gallery `NavLink`s:

* Remember to use your instructional resources! Raise your hand on Progress
  Tracker!
* You want to make use of the `galleries` array you have as a prop in
  `GalleryNavigation`.
* Putting curly braces `{}` in your JSX templates lets you execute any
  JavaScript you want.
* The `to` property for each `<NavLink>` should be `galleries/[insert the
  gallery.id here]`.
* **BIG HINT:** You can use `.map` off of your `galleries` array to create a
  React component out of each member of the `galleries` array.

This will be one of your first brushes with the [React `key` prop][key]. You
will need to provide a key prop whenever you create components using `.map`.
Usually you will use the `id` of your data object (or some other unique
attribute) as the key.

Make sure that your `GalleryNavigation` component renders links to the home page
and to each of the galleries in the navigation bar. If so, success!

(Quick test: Can you explain why clicking on any of the gallery links pulls up
"Page Not Found"?)

Now that you have your `GalleryNavigation` component rendering the correct
content, you need to render it in the correct place. The whole reason for using
`NavLink`s is so that you can style the links when they are active. At the
moment, however, your links only show up at the `galleries` route. Once you
click on a link, your `GalleryNavigation` disappears as you are whisked away to
the new "page". You accordingly want to have your `GalleryNavigation` render on
every page, not just at the `galleries` route.

You will take up this task in Phase 3. Before you move on, though, take a few
minutes to think about how you might accomplish it.

[http://localhost:5173/galleries]: http://localhost:5173/galleries
[navlink]: https://reactrouter.com/en/main/components/nav-link
[key]: https://react.dev/learn/rendering-lists#keeping-list-items-in-order-with-key
