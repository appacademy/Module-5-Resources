import { legacy_createStore as createStore, combineReducers, compose, applyMiddleware } from 'redux'
import spotReducer from './spots'

//!! dispatch({ type: "@@init" })

const rootReducer = combineReducers({
  spots: spotReducer,
  session: (state={ user: null }, action) => {
    switch(action.type){
      default: return state
    }
  },
  spotDetails: (state={}, action) => {
    switch(action.type){
      default: return state
    }
  },
  reviews: (state={ userReviews: [], spotReviews: [] }, action) => {
    switch(action.type){
      default: return state
    }
  },
  bookings: (state={ userBookings: [], spotBookings: [] }, action) => {
    switch(action.type){
      default: return state
    }
  },
  search: (state={}, action) => {
    switch(action.type){
      default: return state
    }
  },
})

let enhancer;

if (process.env.NODE_ENV !== "production") {
  const logger = require("redux-logger").default;
  const composeEnhancers =
    typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ trace: true })
      : compose;
  enhancer = composeEnhancers(applyMiddleware(logger));
}

export default function configureStore(preLoadedState){
  return createStore(rootReducer, preLoadedState, enhancer)
}