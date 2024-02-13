# Phase 2: `Folder`

In Phase 2, you will refactor the `Folder` component from a class component
into a function component. The `Folder` component is rendered inside of `App`,
where it's passed an array of folder objects as props. The `Folder` component
renders the tabs of the folder as a sub-component called `Header`. The selected
tab is stored as a component state variable in `Folder`, and the content of the
selected tab is rendered inside of the `Folder` component.

Create a new `Folder` function component that expects the `folders` prop passed
in from its parent component, `App`.

Convert the `currentTab` state variable in the `Folder` class component into a
state variable in the `Folder` function component.

Convert any instances of `this.state` or `this.props` in the `Folder` Class
Component to their respective variables in the `Folder` function component.

Convert the `selectTab` method into a regular function.

If you're having trouble getting the tests to stay green, remember that you can
also run your code in the browser, where you have access to debugging tools like
`debugger`, `console.log`, and setting breakpoints in the browser's DevTools.
Remember to check any error messages carefully as well.
