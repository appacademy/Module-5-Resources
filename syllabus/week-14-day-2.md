## Why React?
- The entire code base is stored on the viewer's browser.
- Reuseable components.
- Does not require the page to reload to change information.

## What are React Components?
- The Building blocks of react applications
- Functions that can accept Props as their only argument, and return JSX

Syntax:

```js
function ReactComponent(props) {
  return <h1>Hello World</h1>;
}
```

## What is JSX?
- JSX is a language made for react to enable declarative programming of ui. It is written like HTML and has similar tags.
- A compiler library called Babel compiles JSX into React functions that create HTML for your browser to display.
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

Syntax:

```js
function ReactComponent(propsObject) {
  const { data } = propsObject;
  return <h1>{data}</h1>;
}
```


## What is the `useParams()` hook from React Router and how does it allow you to use parameters in your route? What does it return?

- It enables you to extract wildcard values from your routes.
- `useParams()` returns an object with your route wildcard names as the key. We deconstruct the keys we need in our component.

Syntax:

- `const { userId } = useParams();`


<br>
<hr>


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
