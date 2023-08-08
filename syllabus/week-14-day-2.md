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
function Component1(propsObject) {
  const { data } = propsObject;
  return <h1>{data}</h1>;
}

function Component2({ data }) {
  return <h1>{data}</h1>
}
```


## React Router
- A library that keeps react components in sync with the url. It manages window location and dynamic route matching, and more.
- **This curriculum uses React Router version 5**
- Browser Router
    - Primary component of the router that wraps your route hierarchy
- Switches
- Routes
    - Path
    - Exact
    - Dynamic Paths

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

- It enables you to extract wildcard variables from the browser's url.
- `useParams()` returns an object with your route wildcard names as the key. We deconstruct the keys we need in our component.
- The primary way we pass around `id`'s to routed components.

Syntax:

- `const { userId } = useParams();`


<br>
<hr>

## What tools do you have to redirect a user?

- Redirect component
- useHistory hook
- NavLink
- Link
- Nested Routes
    - useRouteMatch Hook
    - useLocation Hook

Syntax:

```js
function ProfileComponent({ user }) {
  if (!user) return <Redirect to="/login" />;

  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/new/page');
  };
}
```
Data Flow Recap Lecture

Top -> Down zoom in of a React website as a recap. Large picture to really small picture.
React Router -> Props -> Component -> Hooks -> JSX