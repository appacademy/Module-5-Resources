# Week 15 Day 2: Redux-Core: Actions, Reducers

<a name="#readme-top"></a>

## What is Redux?

- Redux is React's most popular Global State Management library.
- Redux is used to manage a **large** amount of global data. It's trivial to keep small amounts of data organized, but enterprise apps process a huge amount of data any given second.
- Because Redux is an architecture for big data management, Redux apps are typically huge with lots of programmers interacting with the system. Therefore the architecture needs to be well established and and control flow predictable.
- Redux provides us with a blueprint - we just need to code out the functions and understand how all the pieces work together.

## Redux in code

- Instantiate Redux by creating a `store` with the `createStore` named import. You can think of a `store` as a box to hold the data (`state`) and core utility functions used to interact with `state`.

- `getState` - retrieves the current store.

- `subscribe(callback)` - registers a subscriber function. The subscriber function accepts one argument, the `store`, and returns a specific key from that store.

- `dispatch(action)` - used to send data to the `store`. When invoked with a valid action object it triggers all reducers in the store and passes the action into them. After reducers run, will then trigger all registered subscribers.

## `react-redux` adapter library

- Since Redux is framework agnostic, we need an adapter that enables Redux to interact with React's VDOM and algorithms. You will use the following named imports from this adapter:

- `Provider` component. This is a context wrapper (similar to ones you created last Thursday) used to insert the `store` into the VDOM.

- `useDispatch()` simply returns a reference to the Redux store's `dispatch` function. Invoke the returned function with a valid `action` to trigger your reducers and subscribers.

- `useSelector(subscriber)` has a `useState` setter under the hood, causing a rerender if the subscriber returns a new ref. This hook allows Redux to trigger rerenders when global state changes. It returns the return of the subscriber callback.

Some Keywords We Use in Redux:

## **state**

- The actual data contained in the global store. State is meant to be *immutable* - never allowed to change. You must always keep state unchanging and unmodified. Mutating state is the most common source of bugs in a React/Redux application and manifests itself as the DOM not responding to changing data.

- Since state should always be immutable, represent state changes by ***creating entirely new objects***. A change === new objects. The old refs must never be mutated or you will have bugs. When making a change to state, **always copy the old ref into a new one, then mutate the new ref**.

## **store**

- The object container that holds your state. The store is always a POJO type where keys are called `slice`s and values are `reducer` functions. The term `store` is not intrinsic to Redux. This is a programming term common to most state libraries.

- In Redux we design our store shape in a function called `combineReducers` where we pass in an object where keys represent our slices of state and values are corresponding reducers.

## **reducer**

- A reducer is a **pure** function that combines objects - usually reducing multiple objects down into a single accumulator object. When we do this, we are taking a pair of data - an object with the data itself and instructions on what to do with the data - and affecting the state shape with it.  This process is not unlike the `Array.reduce` method some of you have used already.

- Get used to the technical idea of `reducer`s. Reducers are everywhere in state management.

## **action**

- Actions are `signals` sent from your app to the state management system (Redux, in this case).

- These signals must be of the correct format - an object with a mandatory `type` key. The `type` key means something to a corresponding `reducer` function, where the `type` tells the reducer how to process this data and how it relates to the `state`. 

- Dispatching actions trigger the Redux machinery, just like new refs trigger React machinery. 

- Actions are given to Redux's `dispatch` function to trigger the invocation of all reducers you have setup in your store. Dispatch will pass your action into each reducer as the second argument.

## **dispatch**

- The `dispatch` is the workhorse of the Redux state machine. Invoke it with an `action` object and it will trigger your `reducers` to run. Dispatch will pass the action into all of your reducers.

- After the reducers run, `dispatch` will then invoke all of your `selectors` with the current `store`, giving React the opportunity to rerender if refs change.

## **selector**

- A callback function given to the `useSelector` hook. This function takes `state` as the only argument and returns a key in the `state` object. 

- In the React component that uses a portion of `state` we invoke the `useSelector` hook and give it our selector callback.

- The `useSelector` hook has a `useState` hook under the hood that accepts the return of your selector function. If that return is a new ref, the setter will cause your component to rerender.

- If your reducers always return new refs and never mutate old state, `useSelector` will make your app automatically rerender when you `dispatch`.