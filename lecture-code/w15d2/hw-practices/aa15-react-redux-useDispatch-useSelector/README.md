# Practice: Redux `useDispatch` and `useSelector`

In this short practice, you will list the titles of articles by loading data
into the Redux store and then having a component _subscribe to_ / listen for
changes to that data.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

You should also add the Redux DevTools to your browser extensions if you have
not done so already. To add the extension in Chrome, go
[here][add-ReduxDevTools]. For other browsers, search in your extension/add-on
menu for Redux DevTools and follow the instructions for adding it to your
browser.

## `useDispatch`

In order to load the data into the store, go to the `ArticleList` component.
Import the [`useDispatch`] hook from [`react-redux`][react-redux] and the
`loadArticles` action creator from __src/store/articleReducer__. Inside the
component, invoke the `useDispatch` hook and assign the result to a variable
called `dispatch` to make the functionality available. Create a `useEffect`
function that `dispatch`es the `loadArticles` function. It should only run one
time. This will load the article data into the store after the first render.

After completing the `useEffect`, install the dependencies, run your app, and
open it in the browser. In the new window, pull up the Redux DevTools. On the
inspector side of the tools, click on the `/articles/loadArticles` action. On
the right side, click the `State` tab. When opening the results you should see
that the `entries` array has now been filled with articles.

If you are successful, your code should look similar to this:

```js
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import SingleArticle from '../SingleArticle';
import { loadArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();

  useEffect(() => {
      dispatch(loadArticles());
  }, []); // NOTE: THERE IS AN ERROR HERE. SEE BELOW.

  return (...);
}
```

## Warning in the terminal

If your code matches the snippet above, you should now see a warning in the
terminal:

```text
React Hook useEffect has a missing dependency: 'dispatch'. Either include it or
remove the dependency array
```

This is a warning from ESLint. `useEffect` thinks that the `dispatch`
function--or any function not declared inside the `useEffect`--could potentially
change. Go ahead and add `dispatch` to the array; your `useEffect` will still
run only once, i.e., after the first render. Why? Because your dispatch function
will remain stable and unchanged as long as you don't change the `store` passed
to the `<Provider>` in your root __main.jsx__.

## useSelector

Now the `ArticleList` needs to subscribe to the store and listen for changes in
the `articles` slice of state. The [`useSelector`] hook handles this
functionality.

Import `useSelector` from `react-redux`. Below the `useDispatch`, create a
variable called `articles` and assign it the value of an invoked `useSelector`.
The `useSelector` takes a callback function as an argument. The argument in the
callback function is the entire Redux `state`. Place state as the argument of
the callback function, then return `console.log('state', state)`. Now take a
look in the browser's console. The log should show the entire store.

You, however, only need the `entries` key from the `articleReducer`. Notice in
the console that, in order to key into the article state, you must first key
into the reducer function. This function was named `articleState` in the
__store/store.js__ file in the `combineReducers` function. In the `useSelector`
`console.log`, key into the state by adding `articleState`. Now when you check
the DevTools console, you should see only the `articleReducer` state. Key into
the `entries` array in the `useSelector`; in the browser, only the `entries`
array should now show. Finally, inside the `useSelector`, remove the
`console.log('state')` part and just return the `entries` array.

If you have been successful, the code should look similar to this:

```js
const articles = useSelector(state=>state.articleState.entries);
```

## Fill in the information from the `useSelector`

Now that the information has been received by the `articles` variable, it is
possible to use the data from the store inside the JSX. Each link from the
data will become a clickable link. Before beginning to code, take a look at the
route in your __App.jsx__. The route will mount the `SingleArticle`
component and pass the id of that article in the URL using the optional
parameter `:id`.

In your JSX, delete all of the `li` elements. Map through the `articles` array
and create an `li` element that returns a `NavLink` for each title. Don't forget
to add a `key` using the `id` from each article. Reference the `path` in the
route to create the links. When you click on each link, you will see
the same hard-coded article based on the `SingleArticle` component. What is
important, however, is the URL. With each click, the `id` in the URL address
should change (even though the displayed article does not).

**Don't forget to import NavLink from react-router-dom!**

If you are successful, your code should look similar to this:

```js
{articles.map(({ id, title }) => (
  <li key={id}><NavLink to={`${id}`}>{title}</NavLink></li>
))}
```

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Use the `useDispatch` hook to dispatch an action creator and update the
   store.
2. Use the `useSelector` hook to subscribe to the store and listen for changes
   in state.

[add-ReduxDevTools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
[react-redux]: https://react-redux.js.org/introduction/getting-started
[`useDispatch`]: https://react-redux.js.org/api/hooks#usedispatch
[`useSelector`]: https://react-redux.js.org/api/hooks#useselector
