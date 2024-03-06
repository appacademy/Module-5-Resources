# Practice: Basic Hooks - useState

In this practice you will learn to use one of the most basic hooks, the
[`useState`] hook. You will use the `useState` hook to change a background theme
from light to dark, as well as to increment and decrement a number.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Storing a background theme in state

Take a look at the __UseState.css__ file in the __src/components/UseState__
directory. Notice that there is a class for `light` and for `dark`. You will use
these classes to change your background based on a button click.

Open the __UseState.jsx__ file in the __UseState__ directory.

Import the __UseState.css__ file into your __UseState.jsx__ file using a
relative path.

```js
import './UseState.css';
```

To create state in your component, you will also need to import the `useState`
hook from the `react` package. Place this import above your CSS import.

```js
import { useState } from 'react';
```

Inside your function component, type `console.log(useState('light'))`. In
your browser DevTools, look at the console. Notice the two values that
are returned in the array. The first value is your current state; the second
value is the updater function used to update the state. Now remove the
`console.log`.

Next, inside your function component, declare state by destructuring the two
values returned from the invoked `useState` function. Give this useState
function an initial state of `'light'`.

```js
  const [theme, setTheme] = useState('light');
```

Look at the React DevTools in your browser. Click on the `UseState` component.
Notice under `hooks` -> `State` you will see the string `light`. This is the
default value you stored in state.

You are now going to add this light theme to your JSX. The outermost `div`
element should have a `className` of `"state"`. Add the `theme` as another
`className` to this `div`. The `div` should now look like this:

```jsx
<div className={`state ${theme}`}>
```

When you look at your browser you should see the light theme color as your
background.

The first test spec in __01-theme.test.jsx__ should now pass when you run `npm
test 01`.

## Alternating the theme

You've used the `useState` hook to create a background color, but you have not
yet used the updater function. Now you are going to create buttons that will
allow the theme to either be light or dark.

Beneath the `h1` tag, the `button` element with the text of `Dark` should turn
the theme `'dark'`.

Inside the button you will use your first [event handler]. Create an `onClick`
handler as an attribute to your button element. Remember that `onClick` handlers
in React use camelCase and should be assigned a function. Give the `onClick`
handler an anonymous function that returns the `setTheme` updater function
invoked with the string argument `'dark'`.

In the browser, click the button. Your background should now switch from light
to dark.

The first two specs in __01-theme.test.jsx__ should now pass.

Repeat the same process for the `Light` button which should `setTheme` to
`'light'`.

All three specs in __01-theme.test.jsx__ should now pass.

## Add a counter

When you want to store information for a different concern in state, you simply
add an additional state variable to the component using another `useState` call.

You now need a state variable to keep track of an ongoing number counter. Add
a component state variable called `count` with `setCount` as its updater
function. Use the `useState` hook. Set the initial value of the `count` state
variable to the number `0`.

Check your React DevTools to see that you now have state variable with the
initial value of `"light"` and a state variable with the initial value of `0`.

You also want to see a `0` as the count in your browser. Replace
`DISPLAY COUNT HERE` in the `h2` tag with the value of the `count` variable.
Remember to use curly braces!

The first test spec in __02-counter.test.jsx__ should now pass when you run `npm
test 02`.

Add an `onClick` event listener to the `Increment` button that calls the updater
function for the `count` to increment the `count` by `1` (turns `0` into `1`,
or `1` into `2`, etc.).

Test this button in your browser.

The first two specs in __02-counter.test.jsx__ should now pass.

Add an `onClick` event listener to the `Decrement` button that will decrement
the `count` by 1 (turns `0` into `-1`, or `-1` into `-2`, etc.) using the same
technique.

All three specs in __02-counter.test.jsx__ should now pass.

## Optional callback function

An updater function returned by `useState` can take a callback function as an
argument.

```js
// without callback function:
setCount(10);       // sets the count to 10

// with callback function:
setCount(() => 10); // still sets the count to 10
```

The updater function will pass the previous state value that it updates as an
argument to the callback when invoking it. You are now going to use this feature
with the `setCount` function to ensure that the state is updated based on the
actual previous state.

Inside your `Increment` button `setCount` invocation, remove the `count + 1` and
replace it with `(prevCount) => prevCount + 1`. Do the same for the `Decrement`
button (with the appropriate adjustment!). While you will not see a difference
here, you are now ensuring that your changes based on a previous state will
update correctly.

Using a callback to update state whenever the update depends on the previous
state is advisable because state updates are handled asynchronously and can be
bundled together. In other words, without the callback, you cannot be sure that
the value stored in `count` when the update is invoked will always represent the
most current value.

```js
// without callback function:
// increments the previous count value by 1
setCount(count + 1);
// works but not best practice

// with callback function:
// still increments the previous count value by 1
setCount(prevCount => prevCount + 1);
// This is best practice when using the value of
// the previous state to update the state.
```

All three specs in __02-counter.test.jsx__ should still pass!

## What you have learned

__Congratulations!__ In this practice you have learned how to

1. Create `state` using the `useState` hook
2. Update `state` using the returned updater function
3. Create a separate slice of state for each concern
4. Use the `onClick` event listener to execute some functionality when a button
   is clicked
5. Use the optional callback function to ensure that the current state is based
   on the previous state

## BONUS

Create a "Toggle Theme" button to replace the "Light" and "Dark" buttons. This
button should conditionally turn the `theme` "light" if the `theme` is "dark"
and should turn the `theme` "dark" if the `theme` is "light". Kind of like a
light switch.

The test spec in __03-toggle-theme.test.jsx__ should now pass when you run `npm
test 03`.

[`useState`]: https://react.dev/reference/react/useState
[event handler]: https://react.dev/learn/responding-to-events#adding-event-handlers
