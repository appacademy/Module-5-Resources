# React Router: Nesting

In this final React Router short practice, you will pull together all that you
have learned about routing in React to created nested routes that show movie
details inside the `Movies` component.

## Learning goals

By the end of this practice, you should be able to

- Create nested routes
- Use React Router's `useParams` hook to access path variables

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Preparation

In your browser you should see an `h1` with the text 'App Component'. You should
also see a Navbar with three links. When you click on the links they should
render the component below them. The active link should be boxed and bold.

Take a look at the code provided in the starter __src__ directory. Much of it
should be familiar from the previous router practices, but two new elements have
also been added: a new component--`MovieDetails`--and a __data__ folder. The
file in the __data__ folder, __movieData.js__, exports a named variable
assigned to an array of objects. You will use the data in this file since you
have no database.

The goal of this project is to be able to list the movie titles provided in
__movieData.js__ and to obtain the specific details for any particular movie
using dynamic segments in nested routes. By the end, your `Movies` component
should look something like this:

![movie-details]

## Create a nested route with a dynamic segment

In __App.jsx__, import the `movies` array that is located in the
__data/movieData.js__ file. Then in your route definitions, find the route
object that mounts the `Movies` component. Add the `movies` data as a prop with
the name `movies` to the `Movies` component. Then in your `Movies` component
destructure the prop variable in the parameters.

Go to the React DevTools in your browser and click on the `Movies` component.
(For now, just ignore all of the `.Provider` and `.Consumer` stuff.) In your
`Movies` component, under `props`, you should now see the array of movies that
you passed as props.

You want to render the `MovieDetails` component inside the `Movies` component at
`/movies/:movieId`, where `:movieId` is the id of the movie that the user clicks
on. (See the details for "The Informer" in the image above.) Think for a minute
about how to do this before you press on.

**Hint:** You want a nested route.

Nested routes are essentially just routes that are children of other routes.
Accordingly, you create a nested route by defining it in the `children` array of
the parent route. Back in __App.jsx__, do this now for the `Movies` route
object: add a `children` key under which you define a route object that will
manifest the `MovieDetails` component. (If you've forgotten how to do this, look
back at the `Layout` route object.) Make sure to pass `movies` to the
`MovieDetails` component as a prop of the same name.

Now you've set up your nested/child route, but if you try going to
[http://localhost:5173/movies/1] in your browser, you will still just see
`Movies Component`, no `MovieDetails Component`:

![movies-component]

How do you tell your router to render children routes?

**Hint:** You need to render a certain element...

To get the router to display the elements on a child route, you need to use the
`Outlet` component. This time, you want the child route to display in the
`Movies` component, so go to __Movies/Movies.jsx__ and render `Outlet` after the
`h1`.

Once you finish--don't forget your imports!--go to
[http://localhost:5173/movies/1] in your browser. If you see `MovieDetails
Component` under `Movies Component`, good job! You've successfully created a
nested route!

![generic-movie-details]

## MovieNavBar

Before finishing out the `MovieDetails` component, let's first create a
`MovieNavBar` so users can switch between movies.

Let's build the component in a separate file. It will only be used inside your
`Movies` component, so create a __MovieNavBar.jsx__ inside the
__components/Movies__ folder. Inside the file, create a `MovieNavBar` function
component that receives `movies` as a prop. Make this component the default
export.

Next, return a `nav` element. Inside the `nav`, map through the `movies` prop,
returning a `NavLink` for each movie. The `NavLink`s can use relative paths, so
the specified URL only needs to be the actual `id` of the single movie. (The URL
does need to be a string, however.) Use the `id` that you receive from each
mapped movie object as the `movieId`. The clickable text that the user sees for
the `NavLink` should be set dynamically to the title of the movie.

(Did you remember your imports?)

Now go back to __Movies.jsx__, import your `MovieNavBar`, and render it between
the `h1` and the `Outlet`. Don't forget to pass `movies` as a prop.

Each time you click a movie link in the browser you should now see the
`MovieDetails` component with the `h1` text "MovieDetails Component" in the
browser beneath the NavBar:

![movie-navbar]

You should also see the movie id change in the URL address bar.

Well done!

## Rendering movie details with `useParams`

It's now time to add the movie details for each component.

In __MovieDetails/MovieDetails.jsx__, make sure your component receives the
`movies` prop.

Now you will use the [useParams][use-params] hook. This hook will allow you to
capture the movie id from the URL.

Inside the `MovieDetails` function, create a destructured `movieId`
variable--because you named the dynamic segment of your route `:movieId`--and
assign it to an invoked `useParams` hook.

```js
const { movieId } = useParams();
```

Now `console.log` the `movieId` variable and take a look in the browser console
to see if that number changes when you click on a different movie.

You currently have the id of the movie you want and you have the list of movies
as props.

Create a variable called `movieChoice` and use the `.find` method to compare the
two id's. This will select the one movie object you are looking for. (**Hint:**
Watch out for comparisons involving different data types!)

Next, in your JSX, replace the text in your `h1` element with the `title` of
the movie, and a `p` element with the description of the movie. Check your
data for the proper key/value choices.

Your finished site should now look like this:

![movie-details]

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create nested routes
2. Generate routes with dynamic segments
3. Use the `useParams` hook to grab parameters from the URL

[movie-details]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/fullstack/react/projects/router-nesting/movie-details.png
[http://localhost:5173/movies/1]: http://localhost:5173/movies/1
[movies-component]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/fullstack/react/projects/router-nesting/movies-component.png
[generic-movie-details]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/fullstack/react/projects/router-nesting/generic-movie-details.png
[movie-navbar]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/fullstack/react/projects/router-nesting/movie-navbar.png
[use-params]: https://reactrouter.com/hooks/use-params
