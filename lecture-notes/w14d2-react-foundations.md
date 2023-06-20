# Intro to the Virtual Dom, JSX and Routing

**Your Lecture Notes**

---

## JSX Basics

- JSX was created as a language used to quickly create virtual HTML nodes. It looks like HTML but certainly isn't! It is familiar text that is transpiled down to JavaScript functions - and then invoked.
- there are two kinds of JSX: Primitives and Components.
  1. Primitives: These get transformed into actual DOM nodes. Elements like `<div>`, `<input>`, `<button>`, etc. These are the traditional elements from HTML. These can take attributes that mean something to the browser.
  2. Components: Functions with a capital name. View components return JSX primitives directly. Logic components usually return other components but the chain eventually resolves down to primitive elements.
- PROPS: You can think of a JSX tag as an element. Just like HTML elements, you pass the element data by assigning key/value pairs within the space after the tag name: `<div myKey={"my value"} ></div>`.
  1. To help understand the differences between React props and HTML attributes, you can think of the properties given to React components this way are considered `props`, while the properties given to JSX primitives this way (divs, spans, buttons, etc) are considered `HTML attributes` and will be seen in the real DOM.
- To run JavaScript that will evaluate to a singular value, open `{}` (curlies) within a JSX tag.