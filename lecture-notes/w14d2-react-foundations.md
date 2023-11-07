# Intro to the Virtual Dom, JSX and Routing

**Add Your Own Lecture Notes**

---

## JSX Basics

- JSX was created as a language used to quickly create virtual HTML nodes. It looks like HTML but certainly isn't! It is familiar text that is transpiled down to JavaScript functions - and then invoked. **Calling a React component with JSX syntax produces a React Element**. 
  1. `<div>children</div> === React.createElement("div", null, "children")`
  2. `React.createElement` returns a singular Virtual Dom Node ready to be converted to the a Real DOM (HTML) Node.
- There are two kinds of JSX: Primitives and Components. (this is a distinction created by your instructor to better help us follow how the language interfaces with React)
  1. Primitives: These get transformed into actual DOM nodes. Elements like `<div>`, `<input>`, `<button>`, etc. These are the traditional elements from HTML. These can take attributes that mean something to the browser.
  2. Components: Functions with a capital name. View components return JSX primitives directly. Logic components usually return other components but the chain eventually resolves down to primitive elements.
- PROPS: We can think of a JSX tag as an element. Just like HTML elements, we pass the element data by assigning key/value pairs within the space after the tag name: `<div myKey={"my value"} ></div>`.
  1. To help understand the differences between React props and HTML attributes, we can think of the properties given to React components this way are considered `props`, while the properties given to JSX primitives this way (divs, spans, buttons, etc) are considered `HTML attributes` and will be seen in the real DOM.
- To run _**JavaScript that will evaluate to a singular value**_, open `{}` (curlies) within a JSX tag.
  1. To better understand why JSX has this rule, we should research the difference between an `Expression` vs a `Statement` in programming.
- Maps: JavaScript's array method `.map()` is extremely helpful in React. We use it all the time to quickly and easily customize components and render them all over the DOM. If you need a lot of the same components, perhaps with different data rendered in each one, then use `.map()` over an array of data and pass in the data to the component the map callback returns.
  1. The outer JSX element must have a React prop named `key` that is assigned a unique value. It must not be an array index.
  2. Syntax: 
   
  ```js
  [1,2,3].map((el) => (
    <div key={<some unique value>}>{el}</div>
  ));
  ```


## Client Side Routing
Add your own notes during the lecture.
- React Router is a library that allows component and page changes without refreshing your ui and clearing state. It allows a JavaScript website to behave like a traditional website with page views and routes.
- To enable client side routing in your React website, use the companion library `react-router-dom`.
  1. Docs: https://reactrouter.com/en/main/start/overview
  2. We should peruse the docs for various hooks and routing syntax. It is hard to remember them all so keep the docs handy.
- Use `createBrowserRouter` and `createRoutesFromElements` to create the routing structure of your app. This should be done in the `App.jsx` file.
- If using a data API, every component to be routed requires `<RouterProvider></RouterProvider>` wrapping it. This is going to be your default setup.
  - You can run a function before your app switches to that page. Use the `loader` prop on a route and give it an async function.
  - The loader function can be tasked with fetching data that the new page requires before loading.
  - Loaders can forward errors from fetch requests if there are any.
- If not using one of React Router's data APIs, Match routes with

```js
<Routes>
  <Route path="/some" element={<MyComponent />}>
    <Route path="nested-path" element={<NestedComponent />} />
  </Route>
</Routes>
```

- A helpful pattern with using the Router is to have a `<Layout />` element to use for your root route (usually "/"). This will enable you to create an easy `Header/Nav - Content - Footer` layout.
- Application exception handling can be done in React Router too - just setup a component called `<ErrorBoundary />` and give it to the `errorElement` prop.
  - Errors will bubble up through your route tree until it meets a route with the `errorElement` prop and then it will render that error element. If you don't setup your own error handling, React Router will fallback to its default error component. 


