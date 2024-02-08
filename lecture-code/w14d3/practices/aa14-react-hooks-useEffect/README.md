# Practice: Basic Hooks - useEffect

In this practice you will:

- Create a `useEffect` to change the color of the background based on an
  interval
  - Then add functionality to change the interval delay based on user input
- Create a `useEffect` to save the current [http status code][status-codes] in
  the browser's [`localStorage`][local-storage]

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Part 1: Change background color

Your task in this part of the practice is to change the background color of your
app's `Cat Status` page every 5 seconds. The app currently sets the background
using the `colors` array imported from __data/colors.json__ along with a number
stored in the `colorNum` slice of state (see __Cat.jsx__). You simply need to
use `setInterval` to update `colorNum` every 5 seconds.

[`setInterval`][set-interval] is a good example of a [_side
effect_][side-effects]. React prefers that you place side effects inside a
[`useEffect`][use-effect] hook.

Accordingly, to change the background color, you should create a `useEffect`
that takes a `setInterval` function inside the callback function. This
`useEffect` should run only once. (**Hint:** Check your homework if you don't
remember how to do this.)

The interval should change the `colorNum` slice of state every 5 seconds. When
setting the state, you should ensure that you have the most updated state. Also,
make sure that the state loops through the colors, i.e., it should return to the
first color after displaying the last color in the array.

Finally, the `Home` button at the top of the screen will, when clicked, return
the user to the home screen, effectively unmounting the `Cat` component. To
prevent a memory leak, make sure to cancel the interval in the `useEffect`
whenever the `Cat` component unmounts.

Your code should look similar to the code below:

```js
useEffect(() => {
  const colorInterval = setInterval(() => {
    setColorIdx((prevIdx) => {
      const newIdx = ++prevIdx % COLORS.length;
      return newIdx;
    });
  }, 5000);

  return () => clearInterval(colorInterval);
}, []);
```

Remember, you must always use the clean up function when utilizing intervals
in a `useEffect`. Otherwise your application can develop memory leaks!

The first two specs in __01-Cat-backgroundColor.test.jsx__ should now pass when
you run `npm test 01`.

## Change interval delay

With the current implementation the background color changes every 5 seconds.
Next you are going modify the `useEffect` you just created to have the interval
delay change based on the value of user submitted slice of state `delay`. This
slice of state is modified by the provided form and submit handler.

Take a moment to read the already provided `handleDelaySubmit` form submit
function. The function checks the value of `delay` before it sets the value
of the `delayChange` slice of state to `delay * 1000` (recall the
`setInterval` delay is looking for milliseconds). It is this slice of state
that the `setInterval` you created should take as an arg to programmatically
change the delay.

Modify the code that the `setInterval` delay should change any time the value
of `delayChange` changes. Recall you will need that slice of state added to the
dependency array to listen for updates.

Your code should now look similar to the code below:

```js
useEffect(() => {
  const colorInterval = setInterval(() => {
    setColorIdx((prevIdx) => {
      const newIdx = ++prevIdx % colors.length;
      return newIdx;
    });
  }, delayChange);

  return () => clearInterval(colorInterval);
}, [delayChange]);
```

All of the specs in __01-Cat-backgroundColor.test.jsx__ should now pass when you
run `npm test 01`.

## Part 2: Local Storage

[`localStorage`][local-storage] is another example of a side effect. It is a
part of the [Window object][window-object] in the browser. It can be used to
store trivial information that anyone is allowed to see. __NEVER store personal
or private information in `localStorage`.__

Your next goal is to persist the value of `statusChange` in your `localStorage`.
If there is a value for `statusCode` stored in `localStorage`, the component's
`statusChange` state should be initialized to the value stored in
`localStorage`. If there is no `statusCode` value stored in `localStorage`, then
you should set the initial value of the `statusChange` to `418`.

**Reminder:** To access the value of a key-value pair in `localStorage`, you can
use the following syntax:

```js
localStorage.getItem(KEY); // => value
```

The key to store the cat status in your `localStorage` can be anything you want.

Open up your browser DevTools. Choose `Application` from the top
bar. Look for `Local Storage` in the `Storage` section. You should see the
address of your browser. Right click
the address and choose `Clear`; this will clear out your app's `localStorage`.
When you reload the page, you should see a picture of a cat with the status code
`418 I'm a teapot`.

The first two specs in __02-Cat-localStorage.test.jsx__ should now pass when you
run `npm test 02`.

Next, any time the user sets a new `statusCode`, you should store that new
`statusCode` in `localStorage` to persist the `statusCode` change. Even if the
user refreshes the browser, the `Cat` component should be initialized to the
`statusCode` most recently set by the user.

`useEffect` is the perfect place to do this. Create a `useEffect` that sets the
`statusCode` in `localStorage` whenever the `statusCode` gets updated.

**Reminder:** To set the value of a key-value pair in `localStorage`, use the
following syntax:

```js
localStorage.setItem(KEY, newValue);
```

With your DevTools still open and your `localStorage` clear, reload the browser
page and notice that your `localStorage` is immediately set with a `statusCode`
of `418`.

Type an existing status in the input box. Notice that `localStorage` updates
each time you click the `Change Status` button. Also notice that, if the
`statusCode` does not exist, it shows a `404` for the image. That is how [HTTP
Cats][http-cats] is built.

All of the specs in __02-Cat-localStorage.test.jsx__ should now pass when you
run `npm test 02`.

## BONUS: Reset status code after no activity

As additional practice, implement a `useEffect` that resets the `statusCode`
back to the default "418" after 10 minutes of inactivity (i.e., if the user has
not submitted a new status code for 10 minutes). This should mean that the timer
resets on any changes to the status code.

(For testing you may want to use smaller durations to ensure you code is working
correctly.)

You may have encountered such functionality on real websites, such as logging
out a user after a duration of inactivity. You could implement that with a
`useEffect` similar to the one you created to solve this problem!

All of the specs in __03-BONUS-Cat-reset-statusCode.test.jsx__ should now pass
when you run `npm test 03`.

## What you have learned

__Congratulations!__ In this practice you have learned how to use `useEffect` to
handle:

1. Applying a `setInterval` function to change the background color
2. Storing and retrieving trivial data in `localStorage`
3. Listening to value changes in state to run side effects

[http-cats]: https://http.cat/
[status-codes]: https://developer.mozilla.org/en-US/docs/Web/HTTP/Status
[set-interval]: https://developer.mozilla.org/en-US/docs/Web/API/setInterval
[use-effect]: https://react.dev/reference/react/useEffect
[local-storage]: https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
[side-effects]: https://react.dev/learn/keeping-components-pure#side-effects-unintended-consequences
[window-object]: https://developer.mozilla.org/en-US/docs/Web/API/Window
