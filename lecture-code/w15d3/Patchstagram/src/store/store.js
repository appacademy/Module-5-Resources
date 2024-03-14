import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import usersReducer from './usersReducer'
import postsReducer from './postsReducer'
import thunk from 'redux-thunk'


const rootReducer = combineReducers({
    usersState: usersReducer,
    postsState: postsReducer
});


let enhancer;

if (import.meta.env.MODE !== "production") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}
else {
  enhancer = applyMiddleware(thunk);
}

const configureStore = (preloadedState) => {
    return createStore(rootReducer, preloadedState, enhancer);
  };

export default configureStore;