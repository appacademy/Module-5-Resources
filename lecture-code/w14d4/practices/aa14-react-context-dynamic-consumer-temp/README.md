# Context - Dynamic Consumer

In the previous practice, you created state and consumed the context. As you
probably noticed, all you really did was display a horoscope sign's details
based on whatever initial value you manually assigned to `currentSign`. There
must be a better way to do this!

In this practice, you will use a component to set--but not read--the value of
the context dynamically. When the component updates the context's value,
components that consume the context should update automatically. You will
investigate whether or not components that do **not** consume the context will
also re-render.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

`cd` into the practice's root directory and run `npm install`. To start your
app, run `npm run dev`.

## Use context in the `Navbar` component

In this practice, you will look at the `Navbar` and `SideCard` components. Both
components are wrapped inside a context provider, but only the `Navbar`
component consumes the context. Importantly, components that consume the context
will re-render **every time** there is a change in context. The question you
need to consider is whether or not the `SideCard` component will also re-render.

To start, navigate to your `SideCard` component
(__src/components/SideCard.jsx__) and add a `console.log` inside the component
with a message indicating that the component is rendering. This will help you
track if the component re-renders when it's not consuming the context.

In your `Navbar` component (__src/components/Navbar.jsx__), import `useContext`
and `HoroscopeContext`. Then, inside your `Navbar` component, destructure
`setCurrentSign`, which comes from invoking `useContext` and passing in your
`HoroscopeContext` as an argument.

Every time there is an `onClick` for the `<span>` element, you want to use the
`setCurrentSign` function to set the `currentSign` to the `sign`. Go ahead and
implement that. When that is complete, add a `console.log` in the component so
you can track when the component re-renders.

To confirm that you have done this correctly, click one of the `<span>` elements
in your browser and see your `Detail` component change its details. If
you do not see the details change, check out the React DevTools tab. In the
component tree, select `Detail` and look at the `hooks` section. Open
`Horoscope`, then `Context`. Confirm that you have selected the right method.

If all is working, you can now go back to the `Console` tab. Now you can test
whether or not the `SideCard` component will re-render if it's not consuming the
context. How many times do you see the `console.log` from the `SideCard`
component as you click on the different signs? If your answer is one, then you
are correct! You will only see the `console.log` once because it will only run
on the initial render. Even though our context is constantly changing each time
you click on a new sign, the components not consuming the context will not
re-render. Only components that consume the context--here, the `Navbar`
component--will re-render as the context changes.

> Note that the `Navbar` **does** re-render even though nothing it renders
> visibly changes. It re-renders because it consumes the context, and the
> context has changed.

## Integrate a `Match` component

You have confirmed that if the component does not consume the context, then it
will not re-render when the context changes. What if a component consumes
the context and also has its own local state (useState)? It will definitely
re-render when the context changes, but does that also reset the local state?
You are going to create another component to solve this question.

If you look at your horoscope data (__src/data/horoscopes.js__), you also have a
`match` property that hasn't been utilized. Let's amp up what you know and
create a new component called `Match`. In this component, you will create a
button that will reveal the horoscope's match when clicked.

To start, create a file called __Match.jsx__ in your __components__ directory.
In this file, create and export a component called `Match`. At the top of the
file, import `useState` and `useContext` from `react` and `HoroscopeContext`
from your context directory.

Before you continue, import the `Match` component into your `Detail` component.
You can add the component after the `h4` element that displays the sign's
traits. Once you have added it, confirm in the React DevTools tab that `Match`
is part of your component tree.

Now that you have the basic setup, create a state with `useState`: call it
`match` and `setMatch` with the default value `false`. This will be used to
trigger the display of the sign's match. The trigger functionality comes from
clicking a button, so in your return statement, create a `button` element and
add an `onClick` that turns your `match` state `true` or `false`.

You will now need the sign's details again, so go ahead and consume the
`HoroscopeContext` with `useContext` and grab the `sign`. Confirm you have
successfully grabbed the single sign's object with a `console.log`. You can
trigger the `console.log` by clicking on a different sign in your `Navbar`.

Once your sign object is available, conditionally render the sign's match after
the `button` element: if `match` is true, reveal the sign's match inside a `div`
element, otherwise, display nothing.

Test your results in the browser - does your current sign's match display and
hide every time you click the button? If so, well done!

Returning to the question at the start of this phase, does your `Match`
component's local state (`match`) reset to `false` each time your context
changes? The short answer: no! It doesn't reset to `false` because the change in
context only causes a re-render, which doesn't affect local state. For `match`
to reset to `false`, the `Match` component would have to be unmounted from the
tree and then added back into the tree.

## What you have learned

**Congratulations!** In this practice you have learned how to set the value of
the context within a component dynamically by using a `set` method provided in
the context. This allowed you to see the following:

1. The context's value changed with each click of a sign's span in the `Navbar`
   component.
2. The components that do not consume the context--e.g., the `SideCard`
   component--**will not** re-render when the context updates.
3. Any component consuming the context--here, `Navbar`, `Detail`, and
   `Match`--**will** re-render.
4. As the `Match` component showed, re-renders caused by a change in context
   **will not** reset local state.
