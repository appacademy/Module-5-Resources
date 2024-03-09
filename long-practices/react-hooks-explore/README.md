# Explore React Hooks

Another developer started a product list page and has requested your help to
complete it.

Here are the incomplete features.

* Click button below each item to see its details in the side panel
* Show highlight on item itself (so user can see the current selection)
* Allow user to open/close the side panel
* Automatically open the side panel if it's closed when an item is clicked
* Automatically clear the selection when the side panel is closed

Go ahead and clone the starter from the `Download Project` link at the bottom of
this page. All the changes you need to make will be in
__src/components/ProductView/ProductView.jsx__.

## Prepare

Before starting to change code on a new-to-you project, it is helpful to become
familiar with what's already been done.  In this case, the original developer
used create-react-app as the starting point, then added a few components to
display a product list. They determined that the product data will come into the
view through a prop named `products`. (It does not matter where that data comes
from as that will be managed outside the component.) Additionally, they finished
the layouts in the UI with a box, image, and button for each product as well as
a panel on the right side.

When you run the application (`npm install` followed by `npm run dev`), you'll
see these UI elements display, but clicking does not do anything. That's where
you come in!

When you look at the code in `ProductView`, you'll find `console.log` statements
in the `onClick` event handlers. That's a clue some work is needed there.
Additionally, you'll find a comment that starts with "TODO". While that might
not be the only work required, these will be elements you need to modify.

An astute developer may also notice there are some props on other components
that aren't in use yet. The extra effort to find them while you're coming up to
speed may save you some time later since you may be able to leverage them to
accomplish your tasks.

Next, you need to pick somewhere to start. The panel toggle seems good since it
has a `TODO` comment.

## Phase 1: Toggle side panel

To replace a constant with a state variable, you'll want to employ the
`useState` hook. Perhaps, something like this

```javascript
const [sideOpen, setSideOpen] = useState(true);
```

Remember to add its import at the top. It will come from the `react` library.

The application should still run after this change, although VS Code and/or the
JavaScript console will probably warn you that `setSideOpen` is defined but not
used.

Go ahead and use it to replace the `console.log` associated with the toggle UI
on the side panel. Remember

* State variables, like constants, are accessible within the JSX.
* Likewise, the setting function for any state variable can be called from JSX.
* Setting a boolean value that's `true` to `false` (or  `false` to `true`) is
  the purpose of the NOT operator (`!`).
  
All this means you could choose to toggle the value with a function call like
`setSideOpen(!sideOpen)`.

After replacing the `console.log` you will likely have code that looks something
like this:

```javascript
<div className="product-side-panel-toggle"
     onClick={() => setSideOpen(!sideOpen)}>
```

If all the changes are correct, you will be able to click the ">" tab on the
side panel to close it. Study the code and see if you can find where it switches
to "<". It is common practice in React to use a state variable in multiple UI
updates.
