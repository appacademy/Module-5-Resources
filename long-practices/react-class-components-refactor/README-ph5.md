# Phase 5: `Autocomplete`

In this phase, you will refactor the `Autocomplete` component from a Class
Component into a function component. The `Autocomplete` component is rendered
inside of the `App` component, where it's passed an array of names as props. The
`Autocomplete` component renders a list of names that could match the rendered
input's value.

## Experimenting with lifecycle methods

**Before you start converting this class component,** take a moment to examine
the behavior of the two lifecycle methods, `componentDidUpdate` and
`componentWillUnmount`. `componentDidUpdate` runs whenever the component's props
or state update. (It does not run after the initial mount, however; to cover
that case, you would have to use `componentDidMount`.) `Autocomplete` uses this
method to add (when the dropdown opens) and remove (when the dropdown closes) an
event listener to the document. This listener enables `Autocomplete` to close
the dropdown menu if a user clicks outside of the component while the dropdown
is open.

In contrast, `componentWillUnmount` runs only once, right before the component
is unmounted. It is accordingly used to clean up any lingering effects of the
component such as subscriptions, scheduled events, or event listeners so that
they will not continue to tie up resources once the component is gone. Here
`componentWillUnmount` makes sure to remove the event listener if it is
currently active. (`removeEventListener` does nothing if it cannot find the
listener to remove, so you don't need to worry about checking the status.)

Each of these lifecycle methods removes an event listener. The includes distinct
`console.log` messages that should enable you to determine which method removes
the listener in any given case. Try to trigger a removal. When is the first time
a message gets logged for removing a listener? Which method does the removal?
Can you get the other method to remove a listener? Why or why not? **Take a few
minutes to experiment and answer these questions before proceeding.**

As you will probably note, `componentDidUpdate` is almost always the method
doing the removal. Why? Because it runs whenever `Autocomplete` updates the
`showList` state variable to open and close the dropdown. Remember that
`componentWillUnmount` runs only before the component unmounts; it will
accordingly never run as long as `Autocomplete` stays mounted on your page.

(If you want to trigger `componentWillUnmount`, run `npm run dev` to watch for
changes to your files, then type an extra return somewhere inside a method in
__Autocomplete.jsx__. Once detected, the non-breaking change will cause the
browser to update the component dynamically, which essentially involves removing
the original `Autocomplete` component and (re-)mounting the updated version.
Voilà! If your DevTools inspector is open while this happens, you should see the
`componentWillUnmount` message: "Cleaning up event listener from Autocomplete!")

## Conversion to function component

Now on to conversion! As in the previous phases, convert the component props and
state in the `Autocomplete` class component to props and state in a Function
Component. Convert the class's instance methods (other than the lifecycle
methods `componentDidUpdate` and `componentWillUnmount`) into regular functions
in the function component.

`Autocomplete` uses a ref (`inputRef`) to assign focus to the input field when a
user clicks anywhere inside the component. A ref is essentially a POJO with a
`current` key pointing to the assigned value. In the class version of
`Autocomplete`, `inputRef` is created with `React.createRef` and assigned by
setting the `ref` attribute on the input field to `this.inputRef`. The input
element can then be accessed as `this.inputRef.current`.

`React.createRef` returns a new ref every time. In a class component, you can
store that ref in an instance variable that will persist, but you don't have
that luxury in a function component. Enter the `useRef` Hook, which returns a
ref that will persist through re-renders: in contrast to `createRef`, `useRef`
always returns the same ref object on each render. This behavior is similar to
what we would expect for a variable created with `useState`, but there is a
crucial difference: **changing the value of a `useRef` ref will not cause a
re-render**. (You can store any value in a `useRef` ref; it is not restricted to
HTML element references, although that is a common use case.) You can read more
about `useRef` [here][useRef].

While you could still use `createRef` in a function component, go ahead and
convert `inputRef` to use `useRef`. The stable nature of a `useRef` ref will
make the `useEffect` that you will write in the next step a little more
straightforward. For now, however, leave the `createRef` in the `map` that
calculates `results` as it is. The first bonus phase below will discuss this
other `createRef`.  

As for the lifecycle methods, convert `componentDidUpdate` into a `useEffect`.
What will you need to put in your dependency array? Remember that a `useEffect`
Hook will only run when an element in its dependency array changes. Next convert
`componentWillUnmount` to a clean-up function returned by your `useEffect`. Look
back at the `useEffect` Hook in your `Clock` component if you are having
trouble.

## Comparing lifecycle methods and `useEffect`

If you kept the class component's code largely intact, then your `useEffect`
probably has two calls to remove an event listener, one in the main function and
one in the returned, clean-up function:

```javascript
useEffect (()=> {
    if (showList)
      document.addEventListener('click', handleOutsideClick);
    else {
      console.log("Removing Autocomplete listener on update!");
      document.removeEventListener('click', handleOutsideClick);
    }
      
    return (() => {
      console.log("Cleaning up event listener from Autocomplete!");
      document.removeEventListener('click', handleOutsideClick)
    });
  }, [showList]);
```

Once you get everything working, **run the same kind of tests** that you ran for
the class component. As before, try to trigger the removal of an event listener.
(Make sure to have the console in the browser's DevTools open when you first
load the page.) When does a removal first occur, and which function causes it?
How does that compare to the lifecycle methods in the class component? How
frequently does the clean-up function fire compared to `componentWillUnmount`?
Why is that?  

Several points are worth noting. First, notice that, unlike with the Class
Component, the first removal attempt occurs as soon as you load the page. Why?
Whereas `componentDidUpdate` waits to run until state and/or props have updated
from the values initially set during mounting, `useEffect` runs every time a
value in its dependency array has changed after a render, **including after the
first render**. When a page first loads, React runs the render function of each
component on the page. Once it finishes the renders, it then proceeds to the
`useEffect`s (which could potentially trigger another render, and so on).
`Autocomplete` initially sets the value of `showList` to `false`, so the first
pass through the `useEffect` results in an attempted removal.

Once the page has fully loaded, what happens when you first click in the
Autocomplete widget? The removal from the clean-up function runs! Why does this
happen? Remember that React always runs the clean-up function before running the
`useEffect` again. As seen above, the `useEffect` has already run right after
mounting. When you click in Autocomplete, it changes the value of `showList` to
`true` so the dropdown will show. React notices the change in `useEffect`'s
dependent variable and, in preparation for running the `useEffect` again, runs
the clean-up function from the previous iteration.

If you continue opening and closing the dropdown, you will note that for every
open/close cycle, the clean-up function removal runs twice, the main `useEffect`
removal, once. This discrepancy occurs because the clean-up function runs after
every change to `showList`--i.e., on both open and close--while the main removal
occurs only when the dropdown closes (i.e., when `showList` changes to `false`).

Finally, this last observation means that the removal in the main `useEffect`
function is essentially redundant: even on dropdown close, any previously
mounted listener will already have been removed by the clean-up function. Since
you don't need it, go ahead and remove it! Try triggering a few more removals to
confirm that your code still works as expected.

## Bonus Phase 1: Convert `createRef` to `useRef` inside a `map`

What if you want to convert the `createRef` inside the `results` `map` to a
`useRef`? This is more complicated than your previous conversion to `useRef`
because Hooks must be used at a function component's top level and not be inside
any kind of loop. You accordingly cannot simply replace the `createRef` with
`useRef`.

To make this conversion work, define a new function component--e.g.,
`TransitionItem`--outside of `Autocomplete` that returns the necessary
`CSSTransition` component. Create the `useRef` ref at the top-level of the
`TransitionItem`. Then inside the `map`, simply return a `TransitionItem` for
each `result`.

One final wrinkle: To work correctly, `CSSTransition` needs certain props passed
down behind the scenes from the `TransitionGroup` that ultimately wraps
`results` in `Autocomplete`'s `render`/`return`. You want to make sure those
props get passed through `TransitionItem` to `CSSTransition`. To make this
happen, deconstruct the props you are passing into `TransitionItem`, storing any
additional props in `props`. (Use the rest operator.) Then, in addition to the
specific props you set when instantiating `CSSTransition`, also pass the rest of
the `props`. (Use the spread operator.)

Test your solution!

## Bonus Phase 2: Convert a previous project into class components

Now that you've converted class components into function components, you should
test your understanding of class components by trying to do the reverse
conversion.

Convert a previous project that uses function components into class components.
You can choose any project to convert.

## What you have learned

In this project you have learned how to convert a React class component into a
function component.

You began with the simplest component, `App`, learning primarily how to use
`useState` to convert a class's state variables. In `Folder`, you added the
capability to handle props. `Weather` then introduced the lifecycle method
`componentDidMount` to fetch data from an API, and you learned how to replicate
this behavior using `useEffect` with an empty dependency array. Moving to
`Clock`, you gained experience using a clean-up function returned from
`useEffect` to mimic the behavior of `componentWillUnmount`. Finally, with
`Autocomplete`, you used `useRef` to create a ref that would persist across
renders and discovered how to use a dependency array with `useEffect` to take
the place of `componentDidUpdate`. You experimented with `useEffect` and the
lifecycle methods as well, seeing not only how they could achieve similar
effects, but also how they differed.

Through all of this, you also learned the importance of covering any code that
you are refactoring with tests. The tests provide you with confidence that your
refactoring did not break anything!

[useRef]: https://reactjs.org/docs/hooks-reference.html#useref
