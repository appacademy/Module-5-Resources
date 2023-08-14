# Redux Core

What is Redux, and what is it for?

Put concisely, Redux is a JavaScript global state machine. In other words, Redux is a system of functions and objects that help us setup and manage global state. The Redux architecture is a blueprint developers can pick up and use without needing to think about how to code a Pub-Sub model themselves.

Redux has a steep learning curve if you are new to using functions across many files and scopes, but this isn't an inherent Redux problem - all professional programming involves tracking pointers across a codebase. When learning Redux for the first time we need to keep the big pictures in mind while learning the function types and purposes.

Keywords:

## **state**

The actual data contained in the global store. State is meant to be *immutable* - never allowed to change. You must always keep state unchanging and unmodified. Mutating state is the most common source of bugs in a React/Redux application and manifests itself as the DOM not responding to changing data. 

Since state should always be immutable, represent state changes by ***creating entirely new objects***. A change === new objects. The old refs must never be mutated or you will have bugs. When making a change to state, **always copy the old ref into a new one, then mutate the new ref**.

## **store**

The object container that holds your state. The store is always a POJO type where keys are called `slice`s and values are `reducer` functions. The term `store` is not intrinsic to Redux. This is a programming term common to most state libs.

In Redux we create the store itself through the `configureStore` function. We design our state shape in a function called `combineReducers` where we pass in an object where keys represent our slices of state and values are reducer functions.

## **reducer**

A reducer is a function that combines objects - usually reducing multiple object down into a single accumulator object. When we do this, we are taking a pair of data - an object with the data itself and instructions on what to do with the data - and affecting the state shape with it.  This process is not unlike the `Array.reduce` method some of you have used already.

Get used to the technical idea of `reducer`s. Reducers are everywhere in state management.

## **action**

Actions are `signals` sent from your app to the state management system (Redux, in this case). These signals must be of the correct format - an object with a mandatory `type` key. The `type` key means something to a corresponding `reducer` function, where the `type` tells the reducer how to process this data and how it relates to the `state`. Actions trigger the Redux machinery, just like new refs trigger React machinery. 

Actions are given to Redux's `dispatch` function to trigger the invocation of all reducers you have setup in your store. Dispatch will pass your action into each reducer as the second argument.

## **dispatch**

The `dispatch` is the workhorse of the Redux state machine. Invoke it with an `action` object and it will trigger your `reducers` to run. Dispatch will pass the action into all of your reducers.

After the reducers run `dispatch` will then trigger all of your subscriber callback functions and pass `state` into them, giving React the opportunity to re-render if refs change.

## **selector**

A callback function given to Redux. This function takes `state` as the only argument and returns a key in the `state` object. If using the `react-redux` adapter library we use the hook `useSelector` to register our selector callbacks with Redux. In the React component that uses a portion of `state` we invoke the `useSelector` hook and give it our selector callback.

The `useSelector` hook has a `useState` hook under the hood that accepts the return of your selector function. If that return is a new ref, the setter will cause your component to rerender. If your reducers always return new refs and never mutate old state, `useSelector` will make app updates feel automagical.