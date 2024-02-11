# Turkey Display, Bonuses

Congrats on making it this far! If you still have time, try the following bonus
tasks.

## Bonus A: Additional practice with `useEffect`

Write code for another `useEffect` to address the "TODO" comment in
__src/components/PictureDisplay.jsx__.

```javascript
// TODO: Wrap in useEffect
```

> **Hint:** The guts of the effect handler function are already done. You need
> only employ the `useEffect` before and set an appropriate `deps` array after
> (or copy/paste the code into an appropriate debugging `useEffect` you coded
> earlier). Make sure that feathers show up when you add them even if no color
> is selected!

## Bonus B: Refactoring

Sometimes, you might change your mind on the best implementation while you're
working. It is a best practice to get SOMETHING working first, then *refactor*
your code to make improvements.

For example, perhaps you'd like to calculate the class name to use for the
`size` in only one place. You probably remember copying and pasting (or
retyping) the calculation for the `className` to use for the size of the
`PictureDisplay` and `Message` components. Now is your chance to change this
decision.

* Copy the `sizeClass` state variable and corresponding `useEffect` with the
  calculation to __App.jsx__.
* Switch the prop passed to both `Message` and `PictureDisplay` from `size` to
  `sizeClass`.
  * In __src/App.jsx__
  * In __src/components/Message.jsx__
  * In __src/components/PictureDisplay.jsx__
* Remove the `useState` and `useEffect` definitions that are no longer needed
  * In __src/components/Message.jsx__
  * In __src/components/PictureDisplay.jsx__
* If possible, remove any imports that are no longer in use. (There might not be
any, but it's good practice to check anyways!)

(Of course, you could also have refactored the code to simply set the size to
the class name directly, but then you wouldn't have gotten the extra practice
with `useEffect`!)

## Bonus C: Additional practice with `React` props, state, layouts, etc.

There are a number of other enhancements you can make to this application to get
additional practice with the various aspects of React that you've learned.
Below, you'll find a few ideas to get you started. The steps for each are left
for you to discover.

* __Trivial__: Set default `size` to medium.
* __Easy__: Size button reflecting selection. (**Hint:** Use the `disabled`
  prop.)
* __Moderate__: Prevent the count text entry from being < 0 or > 10. (**Hint:**
  Refactor the input to a controlled form element by assigning its `value`).
* __Challenging__: Improve the layout for settings elements. What to do is up to
  you! (**Hint:** It will probably involve a mix of JSX and CSS.)
