# React Hooks

Take notes during lecture

A hook is a way to access built in features through functions. In React, all hooks start with the lowercase word "use", even custom hooks that you will create.

---

## React's Observation of Memory

React's algorithms and hooks rely on variables' references in memory. React does not care about the value of your variables - that would be too intensive to check. It relys on your variable's location in memory changing to signal a change in state, whether there was an actual change in value or not. Many of React's algorithms use JavaScript's strict equality operator to detect changes in memory: `===`. 

To succeed in React, we must be able to precisely manipulate our variable's references in memory. Today you will learn how to do that, so be sure to take good notes.

- your notes here

---
## useState

useState is the main way to provide state to a function component. It stores the initial value you pass in as the arg, onto the heap, so the component doesn't reset the value every function call. The hook returns a getter and setter. The useState setter is the only tool you have in App Academy that can trigger React's component lifecycle algorithms.

- your notes here

---

## useEffect

This hook gives you access to React's component lifecycle. It is meant to run side effects in your code after the component updates from `useState`. They pair together very well. useEffect is mostly used to either run an effect when the component mounts or run an effect if a variable's reference in memory changes. It is not meant to replace generic helper functions.

- your notes here

---

## Controlled Forms

Forms in React are called "Controlled Forms" because React must manage the form state through the library. HTML form elements will retain default functionality even if spawned by React, but React needs to controlled the state of the form to keep it in sync with the VDOM. To control a form, each input is assigned to a useState slice.

- your notes here

---

## Form Validation

Client side form validation is one of the most important tasks you have as a frontend dev. Most sites allow users to input data to be written to the company's database. As you are well aware, databases are type-driven and extrememly finicky. A database going down because a user entered the wrong type into the form is a devastating blow to the company. We must never let that happen. 

Many real-time validation features are done through the `useEffect` hook, and that will be the default way you validate through JavaScript in App Academy. `useEffect` can listen to your input slices of state for changes, then run validation logic on those slices.

Another way to validate forms client-side is through default HTML input types. This is the easiest way to do it and does not involve much code writing. However, if you want custom validation messages or ui you'll need to write JavaScript anyway.

- your notes here
