## For august '23. Complete fullstack data flow instructor talk.
- All the moving parts of a website
- The role of Mod 4's API
- The role of SQL and databases
- The role of Mod 5's React/Redux libraries

## Why we use React (review)
- The entire code base is stored on the viewer's browser.
- Reuseable components.
- Does not require the page to reload to change information.
- Largest JS ecosystem of prebuilt components and styling
- It manages component state automatically

## React Components
- The Building blocks of react applications
- Functions that can accept Props as their only argument, and return JSX
- Any function with a capitalized name.

Syntax:

```js
function ReactComponent(props) {
  return <h1>Hello World</h1>;
}
```

## JSX
- JSX is a language made for react to enable declarative programming of ui. It is written like HTML and has similar tags.
- A compiler library called Babel compiles JSX into React functions that create HTML for your browser to display.
- JSX has two kinds of tags: `React Components` and `JSX Primitives`
- React Components can receive any kind of prop
- JSX Primitives can be given only HTML attributes since they become actual DOM elements
- Use braces within JSX to use JavaScript.
Syntax:

- `<h1>My Awesome H1</h1>`
- `<ReactComponent newKey={propValue}></ReactComponent>`
- `<div>{variableOrExpressionWithReturn}</div>`

## Props
- React components are functions, and react calls these functions with one
  argument: a props object. We can define new key value pairs in this props
  object within JSX. Props' keys are optionally deconstructed when the component
  is defined.
- Props are the primary way you'll pass data from one component to another.
- The props object is the single argument given to Component functions.

Syntax:

```js
// passing prop key/value pairs
function App() {
  const data = [1,2,3,4,5];
  return (
    <div>
      <Component1 data={data} />
      <Component2 data={data} />
    </div>
  )
}

// using prop key/value pairs
function Component1(propsObject) {
  const { data } = propsObject;
  return <h1>{data}</h1>;
}

function Component2({ data }) {
  return <h1>{data}</h1>
}
```


## React Router
React Router is the library React devs use to simulate conventional page routing on React websites, matching components to url paths. It manages window location and dynamic route segments(variables in your url), and more. The main components of the React Router system are:
- `<RouterProvider router={router} />`
  - Primary component of the router and is rendered in `App.jsx`
- `createBrowserRouter()`
  - takes an array of route objects
- `createRoutesFromElements()`
  - Takes in JSX component as arg
  - Uses `<Route></Route>` component from react-router-dom
  - Outputs an array of route objects for `createBrowserRouter`
  - Familiar syntax for devs using older router versions
- `loader={async ({ params }) => {}}`
  - Enables us to read data from somewhere and provide it to the component loading on that route, before that component is rendered
- `action={(request) => {}}`
  - Enables us to capture non-GET requests from a route's component and do something with the response
  - Overshadowed by Redux Thunk which you will learn next week

There are other features of the Router like `<BrowserRouter></BrowserRouter>` and `<Routes></Routes>`, but these are support for legacy syntax and you shouldn't learn it on first exposure. The [Router docs](https://reactrouter.com/en/main/start/concepts) will help you use the library and discover additional features not mentioned by our program.

Syntax:

```js
function App({ data }) {
  return (
    <BrowserRouter>
      <Switch>
        <Route
          exact
          path="/profile/:userId"
        >
          <ProfileComponent data={data} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
```


## `useParams()`

- It enables you to extract wildcard variables(dynamic route segments) from the browser's url.
- `useParams()` returns an object with your route wildcard names as the key. We deconstruct the keys we need in our component.
- Dynamic route segments are the primary way we pass `id`'s to routed components.
- Route segments can also be extracted within the `loader` functions.

Syntax:

- `const { userId } = useParams();`


<br>
<hr>

## What tools do you have to redirect a user?

- Navigate component
- useNavigate hook
- NavLink
- Link
- Return `redirect` in a loader

Syntax:

```js
function ProfileComponent({ user }) {
  if (!user) return <Navigate to="/login" />;

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/new/page');
  };
}
```