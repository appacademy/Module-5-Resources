# Turkey Display: `useEffect` Practice

This project includes the foundation for a simple application with controls to
configure the display of a turkey drawing for kids.

The goal is to practice different use cases for the `useEffect` hook in React
to improve your understanding and build confidence in your skills. It covers:

* Debugging prop changes
* Debugging state changes
* Catching state changes to generate another state value programmatically
* Catching prop changes to generate a state value programmatically

## Phase 0: Orientation

Clone the starter from the `Download Project` link at the bottom of this page.

Look through the existing JavaScript and CSS files to familiarize yourself with
the project.

As you probably noticed, the project contains two function components in
__src/components__:

* PictureDisplay (for the image)
* Message (for the message)

Each component has at least one prop passed to it from __src/App.jsx__--`size`
(string), `featherCount` (number), and/or `featherColors` (array)--and a
`console.log` which writes out the component's name and each of its props.

The project also includes user controls (in __src/App.jsx__) that manipulate
state variables (set up with `useState` hooks) through `onClick` and `onChange`
events.

Run `npm install` and `npm start` to see what is available. At this time, it is
okay to receive warnings about variables that are "assigned a value but never
used". Through the steps outlined in this project, you will correct these
problems.

Go ahead and click on the controls to see what `console.log` messages have been
included. Also, look for warnings or errors appearing in the *JavaScript
Console* (found in the *Developer Tools* you can open in your browser).

## Phase 1: Improve debugging

Problem: Every click in the UI - even on unrelated elements - causes the
`console.log` in each of the two components to display. This can make it
difficult to debug because changed values get lost in the middle of values that
did not change.

Solution: Wrap each `console.log` inside a `useEffect` hook, so it is only
executed when the prop actually changes.

### Step-by-step: `Message` component

The easiest place to begin is with the `Message` component.

* Run the application (`npm install`, if you've not done so already, then `npm
start`).
* Look at the console in the browser (3-dot button on the right side of the
toolbar -> More Tools -> Developer Tools).
* Click in the page to modify the feather count, feather color(s), and/or
display size. Notice that TWO outputs appear each time: one for `PictureDisplay`
and one for `Message`. For example,

```plaintext
PictureDisplay m 0 []
Message m
```

*There is one time when no output happens on clicking. Did you find it?*

(It's the click on the "Small" button after refreshing.)

*Do you know why this behavior is occurring?*

(The default value for `size` is "s". Accordingly, clicking the "Small" button
to set the `size` to `'s'` doesn't actually change the state. Therefore, React
does NOT rerender the component or its subcomponents with the `console.log`.)

* Open __src/components/Message.jsx__.
* Import `useEffect` from the `react` package at the top of the file.

```javascript
import { useEffect } from 'react';
```

* Immediately before the `console.log`, declare the `useEffect` hook with the
handler function (e.g., `function () {` or `() => {`). After the `console.log`,
end the function (`}`), close the hook (`)`), and end the statement (`;`).

* Verify your code looks something like this.

```javascript
  useEffect(() => {
    console.log('Message', size);
  });
```

* Refresh the browser and click a bunch of UI elements again. The `Message` log
is still showing each time! Can you guess why?

> **HINT:** The `useEffect` hook takes a second parameter which is a list of
> "dependencies", or `deps`, which are variables the function uses (a.k.a.,
> "depends on").

* Before the closing parenthesis (`)`), add a comma and declare an array
  containing only the variable `size`. Now, your code should look like this
  (starting at the top of the file).

```javascript
import { useEffect } from 'react';

function Message({ size }) {
  useEffect(() => {
    console.log('Message', size);
  }, [size]);

  return (
  // NOTE: The rest has been omitted since it is unchanged
```

* Refresh and click in the UI again. Now, the `Message` log will only display
when you modify the `size`. Awesome!

### Step-by-step: `PictureDisplay` component

Begin by following the same pattern.

* Open __src/components/PictureDisplay.jsx__.
* Import `useEffect` from the `react` package.
* Wrap a `useEffect` hook around the `console.log`, including the three
dependencies (`deps`). Your code should look something like this:

```javascript
  useEffect(() => {
    console.log('PictureDisplay', size, featherCount, featherColors);
  }, [size, featherCount, featherColors]);
```

* Test using your browser to ensure it's still working.
* Notice that the color checkboxes no longer cause any log statement to display.
This is because their `onChange` events modify state variables that are **NOT**
passed to any of the components as props. Don't worry, you'll be addressing this
shortcoming soon. For now, stay focused on the debugging so you can check that
off the to-do list.

There is an alternative approach to debugging props with `useEffect`.
Specifically, you can declare a separate instance of `useEffect` for each prop
individually.

* Comment out the `useEffect` you just made (all 3 lines).
* Write a new `useEffect` with a `console.log` for the `size` prop.
* Write another `useEffect` for the `featherCount` prop.
* Write a third `useEffect` for the `featherColors` prop.

```javascript
function PictureDisplay ({ size, featherCount, featherColors }) {
  // useEffect(() => {
  //   console.log('PictureDisplay', size, featherCount, featherColors);
  // }, [size, featherCount, featherColors]);
  
  useEffect(() => {
    console.log('PictureDisplay size', size);
  }, [size]);

  useEffect(() => {
    console.log('PictureDisplay feather count', featherCount);
  }, [featherCount]);

  useEffect(() => {
    console.log('PictureDisplay feather colors', featherColors);
  }, [featherColors]);

  return (
  // NOTE: The rest has been omitted since it is unchanged
```

Now you'll see the following in the browser's console as you interact with the
settings.

Click one of the size buttons ("Medium", for example).

```plaintext
PictureDisplay size m
Message m
```

Click the up arrow on the feather count.

```plaintext
PictureDisplay feather count 1
```

Check or uncheck any of the colors. Nothing happens.
