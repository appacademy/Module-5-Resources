import { applyMiddleware, compose } from 'redux';

let enhancer;

if (import.meta.env.MODE === "development") {
  const logger = (await import("redux-logger")).default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

export const configureStore = () => {
  return;
};

export default configureStore;

