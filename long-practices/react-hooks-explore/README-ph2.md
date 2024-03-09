# Explore React Hooks, Phase 2: Track Selected Item

Now, you will add a second state variable on your own. This one will track the
`selectedProduct`.

> **Hint:** The previous developer left a `console.log` in the handler for the
> `onClick` of each `ProductListItem` to show you the data that is needed to be
> stored in state for the selected item.

In order for the info to show in the side panel, the new state variable will
need to be passed through a prop to the `ProductDetails` component. Go ahead and
add that as well.

> **Hint:** The `visible` prop is already receiving the value of the `sideOpen`
> state variable. If you look at the `ProductDetails` component, you will find
> the other prop that the previous developer already coded.

When all is connected correctly, you can run the application, click each button
below the images, and see associated details in the right side panel.

What would help the user experience is to also highlight the box in the list for
the item whose details are showing. Again, the previous developer thought of
this and created a prop to change the style, `isSelected`.

Think about the condition for showing the selection and put that into the JSX.

> **Hint:** Both `item` and `selectedProduct` are objects that have `id`
> attributes.

Finally, you can run the application again to see both the highlight on the list
and the side panel both update.
