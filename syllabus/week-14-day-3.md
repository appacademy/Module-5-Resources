
<p align="right" style="font-size:10px">
  <a href="./README.md">Back to learning objectives README.md</a>
</p>

Week 14 Day 3: React Hooks

## React hooks

- functions with names prefixed with the word 'use'.
- Remember, hooks are just helper/utility functions. Configure their arguments and return values to be suitable for the use case. Keep them SRP.
- They allow the use of other hooks in a helper function.
- Rules of Hooks:

**Only Call Hooks at the Top Level**
  
Don’t call Hooks inside loops, conditions, or nested functions. Instead, always use Hooks at the top level of your React function, before any early returns.

**Only Call Hooks from within React Function Components**
An exception: you may call Hooks from custom Hooks: [custom hooks](https://reactjs.org/docs/hooks-custom.html).

## `useState()`

- This hook enables you to keep persistent data between renders. It is the most important React hook.
- Setters can take a function as an argument. If it detects a function, it will invoke that function with the current state as the argument.
- Invoking the setter with a callback can solve some race conditions.
- Hooks are batched. This means only one render will happen per state change. This is by design and a performance constraint.
- **useState causes re-render of your component if you call its setter with a new reference in memory.**
- **1 of only 2 hooks that can trigger React's Diffing Algorithm**

## `useEffect()`

- Used to run functions after state changed in your component.
- useEffect callbacks (called 'effects') are invoked in order and managed by React's lifecycle algorithms.
- All effects run **after** the component renders.
- There are three timing configurations for useEffect.
- useEffect's effects can optionally return a callback as a cleanup function.
- will run if any refs in the dependency array are new

<br />
<hr />

React hooks documentation: [https://reactjs.org/docs/hooks-reference.html](https://reactjs.org/docs/hooks-reference.html)

Custom hooks documentation: [https://reactjs.org/docs/hooks-custom.html](https://reactjs.org/docs/hooks-custom.html)

Rules of hooks documentation: [https://reactjs.org/docs/hooks-rules.html](https://reactjs.org/docs/hooks-rules.html)

React event-handling documentation: [https://reactjs.org/docs/handling-events.html](https://reactjs.org/docs/handling-events.html)

<p align="right" style="font-size:10px">
  <a href="#readme-top">Back to the top</a>
</p>
<p align="right" style="font-size:10px">
  <a href="./README.md">Back to learning objectives README.md</a>
</p>
