<p align="right" style="font-size:10px">
  <a href="./README.md">Back to learning objectives README.md</a>
</p>

Week 14 Day 4: React Context

## What is React Context?

- Previously, the only way to pass information from one component to another was through props or `useParams`.
- Context is a component that stores data and makes it available to all child components. Components can subscribe to this data through the `useContext` hook.
- The Context component itself is the Provider, and components that subscribe to context data are called Consumers.
- The Provider component accepts a mandatory prop called value which is usually an object, but you can assign it to anything.
- A React application can have many Context components that do specific things. It is common to see production applications with Contexts for themes, user auth data, language settings and other kinds of global data.
- React's Context API is purely a prop injection system. It does not give you a way to manage the value. You have to design that part yourself.

## Custom context provider (dynamic provider)

- A component that returns the `Context.Provider` and holds the Context's state.
- It is like any other component and thus can use React hooks for state and side effect management.
- Pass useState setters into the value so subscribers can change the Provider's state. This makes it dynamic.
- Can keep renders efficient by using `{props.children}` as the only content of `<Context Name>.Provider`. This way only the Provider and Subscriber components will rerender on value change, but non-subscribers will not rerender.

## `useContext()`

- Allows a component to subscribe to context data.
- `useContext` has a useState dispatcher function built in, so it can re-render your page if the Context value is a new ref in memory.
- Create your own hook in your context provider file to eliminate needing to import both `useContext` and `CountContext` in every file.

<br>
<hr>

React context documentation: [https://reactjs.org/docs/context.html](https://reactjs.org/docs/context.html)

<p align="right" style="font-size:10px">
  <a href="#readme-top">Back to the top</a>
</p>
<p align="right" style="font-size:10px">
  <a href="./README.md">Back to learning objectives README.md</a>
</p>
