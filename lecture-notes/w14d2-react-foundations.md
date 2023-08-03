# Intro to the Virtual Dom, JSX and Routing

**Your Lecture Notes**

---

## JSX Basics

- JSX was created as a language used to quickly create virtual HTML nodes. It looks like HTML but certainly isn't! It is familiar text that is transpiled down to JavaScript functions - and then invoked.
  1. `<div>children</div> === React.createElement("div", null, "children")`
  2. `React.createElement` returns a singular Virtual Dom Node ready to be converted to the a Real DOM (HTML) Node.
- There are two kinds of JSX: Primitives and Components. (this is a distinction created by your instructor to better help us follow how the language interfaces with React)
  1. Primitives: These get transformed into actual DOM nodes. Elements like `<div>`, `<input>`, `<button>`, etc. These are the traditional elements from HTML. These can take attributes that mean something to the browser.
  2. Components: Functions with a capital name. View components return JSX primitives directly. Logic components usually return other components but the chain eventually resolves down to primitive elements.
- PROPS: We can think of a JSX tag as an element. Just like HTML elements, we pass the element data by assigning key/value pairs within the space after the tag name: `<div myKey={"my value"} ></div>`.
  1. To help understand the differences between React props and HTML attributes, we can think of the properties given to React components this way are considered `props`, while the properties given to JSX primitives this way (divs, spans, buttons, etc) are considered `HTML attributes` and will be seen in the real DOM.
- To run _**JavaScript that will evaluate to a singular value**_, open `{}` (curlies) within a JSX tag.
  1. To better understand why JSX has this rule, we should research the difference between an `Expression` vs a `Statement` in programming.
- Maps: JavaScript's array method `.map()` is insanely helpful in React. We use it all the time to quickly and easily reuse components and clone them all over the DOM. If you need a lot of the same components, perhaps with different data rendered in each one, then use `.map()` over an array of data and pass in the data to the component you return.
  1. The outer JSX element must have a React prop named `key` that is assigned a unique value. It must not be an array index.
  2. Syntax: `[1,2,3].map((el) => (<div key={<some unique value>}>{el}</div>))`

---

## Routing
Add your own notes during the lecture.
- react-router-dom allows component and page changes without refreshing your ui and clearing state. It allows seamless dynamic interaction on your page.
- To enable client side routing in your React website, use the companion library `react-router-dom@5`. Version 6 has different syntax and may be confusing.
  1. Docs: https://v5.reactrouter.com/web/guides/quick-start
  2. We should peruse the docs for various hooks and component syntax. It is hard to remember them all so keep the docs handy.
- Every component to be routed requires `<BrowserRouter></BrowserRouter>` wrapping it.
- Match routes with `<Switch></Switch>` and `<Route></Route>`.