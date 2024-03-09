# Phase 2: LightSwitch

Now, you'll work on changing the value of a context in a React component.

Take a look at the code in the `LightSwitch` component
(__src/components/Greenhouse/LightSwitch.jsx__). This component should change
the `themeName` between `"day"` and `"night"`. When the `div` with the class of
"on" is clicked, the `themeName` should be set to `"day"`. When the `div` with
the class of "off" is clicked, the `themeName` should be set to `"night"`.

The `themeName` value should also replace the hard coded `"day"` class on the
`div` with the class of "light-switch" plus the appropriate theme name based on
state. For example,

```jsx
<div className={`light-switch ${themeName}`}>
```

**Hints:**

* Use the `useTheme` hook like you did in the previous phase to retrieve the
  `setThemeName` property from the context Provider value.
* Then use the `setThemeName` function to correctly change the name of the theme
  based on clicking the `<div>` with the `onClick` event listener.

**Test in the browser.**

If the image of the greenhouse changes when you click on the "DAY" or "NIGHT"
text, then you successfully changed the value of the context in a React
component!
