# Explore React Hooks, Bonus Phase: Remember State Using Local Storage

There are times when it would benefit your users if the application remembered
some of the settings on refresh or between sessions. The `useEffect` hook is one
way (probably the best way) to put the value of a state variable into
`localStorage`. Likewise, the `useState` definition is often the best time to
get the value back out.

Remember that there will be no value in `localStorage` the first time a user
visits your application, so you'll need to check for that and provide an
appropriate default. (You probably want the panel to be open on a user's first
visit since it contains the welcome message.)

In this bonus phase, store the state of the side panel (whether opened or
closed) in local storage. You can view (and edit or delete) local storage in the
JavaScript tools in your browser by going to the "Application" tab and looking
for "Local Storage" under "Storage" on the left.

> **Hint:** If you get stuck trying to figure out how to determine if the
> boolean `false` has been put into `localStorage`, note that `localStorage`
> stores and returns all values as strings and that **any** non-empty string
> (including "false") is considered **truthy.**
