# React Context API

Take notes during lecture

React Context is Props 2.0. You can think of Context as a way to pass a prop (some data) to any component anywhere in the tree without going through parent-child relationships. This solves the problem of prop drilling and unsafe data propogation throughout the app.

The Context API is boilerplate. How you use Context to solve problems is not boilerplate, but there are general use cases. Think of Context as "Prop Injection".  It gives you "global" state, but if you want to manage that global state, you'll have to build the architecture yourself. Context is not global state management on its own.

- your notes here

---

## Dynamic Providers

This is the real way you'll use context in the industry. React hooks in the Provider component allow dynamic data updates to propogate through your app. Return state setter pointers in the value object to allow ancestor components to change the Provider's state

`{props.children}` is how you will limit rerenders to child components if an ancestor invokes a setter in the Provider.

- your notes here

---
## useContext

This hook, when invoked with the context pointer you want, will return the value object from that context's provider. We usually destructure the key we are interested in from that object.

This hook has a state setter buried in its source code. If the Provider rerenders, this hook will cause the component it lives in to rerender as well, allowing new data to be consumed by the component.

- your notes here
