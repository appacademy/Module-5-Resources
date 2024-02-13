# Phase 4: `Clock`

In Phase 4, you will refactor the `Clock` and `ClockToggle` components from
class components into function components. The `Clock` component is rendered
inside of `App` but is not passed any props. It displays the current date/time
information and will be updated every second. The `ClockToggle` is basically a
button that will mount and unmount the `Clock` component from the page. (This
will enable you to test your `useEffect` clean-up function.) It is also rendered
inside of `App` and is passed one prop: the `toggleClock` callback that should
run when the button is clicked.

Just like with the previous phases, begin by converting the component props and
state in the `Clock` and `ClockToggle` class components to props and state in
function components. That should be all you need to do for `ClockToggle`.

As for `Clock`, convert its instance methods besides the lifecycle methods
(i.e., `componentDidMount` and `componentWillUnmount`) into regular functions in
the function component.

`componentDidMount` will run after the first render of the component. Convert
this into a `useEffect` with an empty dependency array in the Function
Component.

`componentWillUnmount` takes the interval id returned by `setInterval` and
clears the interval. `componentWillUnmount` will be called right before the
component is removed from the component tree. Have the `useEffect` function that
replaced `componentDidMount` return a function that will clear the interval set
by the `useEffect` function. (This step is a bit tricky, so call for help if you
can't solve it within 15 minutes.) React will automatically run this returned
function behind the scenes when the component is about to unmount. React would
also run this function to clean up before running the `useEffect` again after a
subsequent render, but the empty dependency array assures that this particular
`useEffect` will only run once per component lifecycle.

Once again, test your conversion in the browser in addition to passing all the
specs.
