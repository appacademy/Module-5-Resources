import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import fruitReducer from './fruitReducer';
import articleReducer from './articleReducer';

/*
This is the most important part of this file. You will add your reducers here to
work with your components. `combineReducers` turns all the reducer functions
into one big reducer function.
*/
const rootReducer = combineReducers({
  fruitState: fruitReducer,
  articleState: articleReducer
});

/*
`enhancer` allows you to alter the store and add functionality such as Redux
DevTools and logger (similar to morgan) middleware.
*/
let enhancer;

/*
`compose` gives you the ability to add more than one enhancer to the store. Vite
provides access to environment variables through `import.meta.env`.
`import.meta.env.MODE` has 3 settings:
   1. `npm run dev` makes `import.meta.env.MODE` = 'development'
   2. `npm run build` makes `import.meta.env.MODE` = 'production'
   3. `npm test` makes `import.meta.env.MODE` = 'test'

window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ along with the Chrome extension for
Redux DevTools will set up your Redux DevTools in the browser.
*/
if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
} else {
  enhancer = applyMiddleware(thunk);
}

/*
`configureStore` is the variable you will use in your root `main.jsx` to give
the Redux store access to the full application.

`createStore`: creates a store object literal ({}).
`preloadedState`: initializes the state. This is mainly used for hydrating state
  from the server. (This is not important right now.)
`enhancer`: see above.
*/
const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
