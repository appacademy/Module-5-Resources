# Turkey Display, Phase 2: Finishing The Color Checkboxes

Now it's time to dig in and get those color checkboxes working. This will
involve defining a `useEffect` hook which responds to one or more state
variables to update another state variable.

## Debugging state variable changes

* Open __src/App.jsx__.
* Notice the state variables (declared with the `useState` hook).
* After these (and before the `return`), declare one `useEffect` hook which
  writes out a `console.log` for each of boolean state variables associated with
  the color checkboxes.
* Remember to also add `useEffect` to the import for `react` elements.

> **HINT:** You will learn more from this practice if you try it on your own
> before looking at the solution that follows.

Seriously, try it now. Then compare your code to the following **possible**
solution.

```javascript
  useEffect(() => {
    console.log('Color Change :: red?', isRed);
    console.log('Color Change :: orange?', isOrange);
    console.log('Color Change :: brown?', isBrown);
    console.log('Color Change :: light brown?', isLightBrown);
    console.log('Color Change :: yellow?', isYellow);
  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);
```

* Run the application in the browser and verify the logs are working.
  * In this approach, every checkbox change will display all five lines; that's
    okay because you're about to do something with them.
  * Alternatively, you may have made five separate `useEffect` declarations, so
    that only one `console.log` shows at a time. This is also fine. However, now
    you'll need to declare another `useEffect` with all 5 booleans for its
    dependencies, so you can take the next step.

## Calculating new state from state changes

In the `useEffect` hook which depends on all 5 state color variables, you now
need to calculate an array of colors which reflects the checked boxes. There's
no need to get fancy here unless you really feel like it. The simplest approach
is as follows.

* Declare a new constant which is an empty array.
* Put in a conditional (`if` statement) to `push` the color word "red" onto
that array whenever `isRed` is `true`.
* Repeat for each of the colors.
  * **IMPORTANT**: The existing code inside `PictureDisplay` depends on the
    color word for "light brown" being spelled with a hyphen: `'light-brown'`.
* Assign the result to the `featherColors` state variable.
* When you're ready, you can comment out the `console.log` statement(s) you used
  for exploring/debugging the state variable changes.

Again, challenge yourself to follow these instructions without looking at the
solution that follows.

> **Remember:** This is not the only possible solution. If your code works, then
> it's good code!

```javascript
  useEffect(() => {
    // console.log('Color Change :: red?', isRed);
    // console.log('Color Change :: orange?', isOrange);
    // console.log('Color Change :: brown?', isBrown);
    // console.log('Color Change :: light brown?', isLightBrown);
    // console.log('Color Change :: yellow?', isYellow);

    const colors = [];
    if (isRed) colors.push('red');
    if (isOrange) colors.push('orange');
    if (isBrown) colors.push('brown');
    if (isLightBrown) colors.push('light-brown');
    if (isYellow) colors.push('yellow');
    setFeatherColors(colors);
  }, [isRed, isOrange, isBrown, isLightBrown, isYellow]);
```

Because the `featherCount` variable was previously set as the value for the
corresponding prop on the `PictureDisplay`, you'll now see the `console.log` you
added earlier when you test in the browser. Also, if you spelled all the color
names correctly, you'll see the feathers in those colors.

Excellent work!
