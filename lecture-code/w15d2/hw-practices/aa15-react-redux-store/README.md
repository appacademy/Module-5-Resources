# Practice: React-Redux Store Connection

Over the next series of short practices, you are going to learn how to

1. Connect React to the Redux store
2. Create actions, action creators, and reducers
3. Learn to watch state using the `useSelector` hook
4. Learn to update the reducer using the `useDispatch` hook

In this short practice, you will finish creating a Redux store and connect it to
React.

## Setup

Clone the starter repo, which you can access through the `Download Project`
button at the bottom of this page.

You should also add the Redux DevTools to your browser extensions if you have
not done so already. To add the extension in Chrome, go
[here][add-ReduxDevTools]. For other browsers, search in your extension/add-on
menu for Redux DevTools and follow the instructions for adding it to your
browser.

## Create Root Reducer

The [_store_][store] houses your application's state tree.

To create a store in Redux, you invoke the `createStore` method and pass it a
required `rootReducer` as an argument.

Before you begin, take a look at the __store/fruitReducer.js__ file that has
been created for you. It is a trivial reducer that you ultimately will have no
need for in this project. At this initial stage, however, it will enable you to
configure the store and connect it to React.

Open the __store.js__ file in the __store__ directory. Read through all of the
comments to get a handle on the code.

Import `fruitReducer` from __fruitReducer.js__ using a relative path.

Below the imports, create a variable called `rootReducer`. This should be
assigned to an invoked [`combineReducers`][combine-reducers] method. The
`combineReducers` method accepts an `object` as an argument. Inside that
`object` you can add as many reducer functions as you need.

Inside `combineReducers`, create a key called `fruitState` with a value of
`fruitReducer`. That is all you need to do for now.

Look at the bottom of the file at the `configureStore` function. You will see
that the `rootReducer` you created will be accepted as the first argument in
that function, along with the optional `preloadedState` (which you will pass as
an argument but not use in this practice), and the `enhancer` argument, which
you will pass in order to add your Redux DevTools and `logger` tool. Remember,
these two tools were composed using a method from `Redux` called
[`compose`][compose] and the [`applyMiddleware`][applymiddleware] middleware.

If you are successful, your `rootReducer` should look like this:

```js
const rootReducer = combineReducers({
  fruitState: fruitReducer
});
```

## Connect Redux to React

In the root of your __src__ directory, open your __main.jsx__ file. Below your
import for `ReactDOM`, import the `Provider` component from `react-redux`. Below
the import for the __index.css__ file, import `configureStore` from `./store`.
Remember, it is a `default export`. Beneath the imports, create a variable
called `store` and invoke the `configureStore` function that you defined in your
__store/store.js__ file.

Similarly to when you connected a React context by wrapping a `Provider`
component around your `App` component, you should now wrap the Redux
[`Provider`][provider] component around the `App` component.

Like the `value` prop for React context, the `Provider` component expects a
`store` prop--it **must** be called `store`--that accepts as a value the result
of invoking `configureStore` (which you saved as `store` above).

If you are successful, your code should look like this:

```js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import './index.css';
import configureStore from './store';

const store = configureStore();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
```

To check that your store has successfully been connected, run `npm run dev` in
your terminal. (Make sure you have `npm install`ed first!) Type `o` in your
terminal to open your app in a new browser window. In the new window, open your
DevTools and choose the `Redux` tab. If everything is correct, you should see an
image similar to the one below when you click on the `State` tab and expand the
`fruitState`:

![redux-store][redux-store]

## What you have learned

**Congratulations!** In this practice you have learned how to

1. Create a `rootReducer` to pass to the `configureStore` method
2. Connect Redux to React

[add-ReduxDevTools]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en
[combine-reducers]: https://redux.js.org/api/combinereducers
[compose]: https://redux.js.org/api/compose
[applymiddleware]: https://redux.js.org/api/applymiddleware
[provider]: https://react-redux.js.org/api/provider
[redux-store]: https://appacademy-open-assets.s3.us-west-1.amazonaws.com/Modular-Curriculum/content/react-redux/topics/redux/assets/redux-devtools.png
[store]: https://redux.js.org/api/store
