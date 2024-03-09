# Explore React Hooks, Phase 3: Enhance The User Experience

Congratulations getting two state variables working! You'll notice as you click
around the application, these variables are completely independent. This can
leave the user with a disconnect where they see an item highlighted in the list
without also seeing the details.

For example, if you close the side panel then click the buttons, you will not be
able to see the details immediately. You have to take an extra step to open the
side panel. A nicer user experience would be to open the side panel
automatically when the details show.

Likewise, if you close the side panel while looking at an item's details, the
highlight still shows in the list. Users may appreciate it more if the selection
automatically clears when the side panel is closed.

Fortunately, React hooks can help in both situations. Specifically, the
`useEffect` hook can help. This hook works by calling a function when one or
more variables change. These variables can be either passed in through props or
managed with state. In this component, you have two state variables to work
with.

## Auto-open side panel

First, consider which variable change will trigger the auto-open effect
(`selectedProduct`) and which setter function will need to be called
(`setSideOpen(true)`).

Second, code the framework of the `useEffect` hook. Each time you utilize
`useEffect`, it can start this same way.

```javascript
useEffect(() => {

}, []);
```

Finally, put the trigger into the array and the call to the setter in the
function body. Consider whether or not you need any conditionals (you might
not).

You probably ended up with something like this

```javascript
useEffect(() => {
  setSideOpen(true);
}, [selectedProduct]);
```

Try it out in the browser by refreshing, closing the side panel, and clicking
one of the buttons in the list. If all is well, the side panel will open while
showing that item's details.

## Clear the selection when the panel closes

Again, consider which variable change will trigger the effect (`sideOpen`), and
which setter function will need to be called (`setSelection`).

Second, put in the framework for `useEffect`. (You can find it above, if you'd
like to look at it again.)

Finally, put the trigger into the array and the call to the setter in the
function body. Again, consider what conditionals are needed, if any.

You probably wrote something like this.

```javascript
useEffect(() => {
  setSelectedProduct();
}, [sideOpen]);
```

Refresh your browser and try to close the side panel. One of three things will
happen:

1. If all worked as expected, congratulations! You are ready to continue with
   the next phase.
2. If the highlight in the list disappears, and the side panel resets to "Our
   Products..." while remaining open, that's okay. Continue to the next phase to
   do some debugging, and you can solve this bug in the process.
3. If the list did not clear or other errors occurred, please check your code.
   You can take a peek at the next phase to see if debugging state change will
   solve your issues. Good developers know when to reach out for help, if
   necessary, before continuing.
