# Thunks: async data with `redux-thunk`

## What is a thunk and why do we call it that?

- `thunk` is a programming term for a subroutine. You've interacted with subroutines as through a similar concept: middleware. Thunks are simply middleware for the `redux` library.

## Why we need middleware in redux

- Because you'll be sending async requests whether you use thunks or not. When we use Redux we want to abide by its architecture as closely as possible. This helps our code scale and integrate into developer teams since our code is predictable and organized.

- Thunks are simply helper functions that process async requests before sending the results to the reducers. You can write async code anywhere in your app, but using the thunk system your code will be organized in the reducer file, giving you one place to look for all data handling pertaining to that reducer.

- Note: Just because we are training you on thunks in App Academy doesn't mean that you must use thunk middleware for all future redux apps. Adjust your code to your app's needs and try to write only the minimum amount of code to meet your goals. Thunks add complexity to a redux app, but the scalability/complexity tradeoff is worth it to enterprise applications.

## Thunks change the control flow

- Any async function that gets data from the db before dispatching an action would change your data flow, so this is to be expected.

- Redux without thunks control flow: `action creator -> dispatch -> reducers -> selectors -> rerenders`
  - Once we create the action, we dispatch that action directly

- Redux with thunks control flow: `outer thunk function -> dispatch -> inner thunk function -> request to api -> action creator -> dispatch -> reducers -> selectors -> rerenders`
  - Before dispatching regular actions, we use thunks to get data from an api and wait for that data to parse, *then* we dispatch actions to reducers.

- After the final dispatch to the reducers, return the thunk data from the inner function. This return sends data back to the caller(dispatch) so you can run side effects depending on the result of the request. The caller is the first dispatch. `redux-thunk` makes dispatch forward thunk returns back to its caller (usually a component or event handler).

## All async code can error out

- This is a very important aspect of programming. All I/O is susceptible to failure and that failure state needs to be handled. Your fetches are no exception. Errors from APIs will change the return of that route.

- You will be processing and displaying the errors you receive from the API you built. Now is a good time to go through your API's documentation to revisit what those error objects look like.

- Thunks need to be designed where if the request fails, we don't send the failure to redux. Errors go back to React so you can display the error messages to the user.

- Some applications store error messages in Redux and this is common practice. If you have a centralized error modal, storing errors in global state makes sense. However, error modals are more advanced functionality and not required for the project.

## Data Normalization

- This concept is a best practice for global state management and not related to thunks directly. However, normalization is a professional approach to data organization.

- Normalized state means your state is presented in a predictable and maintainable way - it is industry best practice.

- Most normalized state organize objects from databases by key/value pairs, where the key is the `id` of that resource. Most databases in the industry are relational so you will almost always have primary keys to use as normalization keys.

- It's helpful to build a normalization function that can take an array of db resources and return a normalized object. This portability can be really useful.

### Wrapping Up

Redux is simply an architecture. A pattern of code built by professionals so you don't have to design the system yourself. Additional middleware like `thunks` round out the architecture by providing a pattern for organizing asynchronous code, which is the final piece of your frontend training. 

Thunks do a lot of key work: sending requests, checking if the request errored, separating request success or failure into different control flows, parsing the Response stream, dispatching the backend data, and finally returning the data back to React. Good thing we have a pattern and don't have to design the code ourselves!

Thunk training completes your App Academy instruction in core full stack development. All other instruction in this course will supplement or enhance the core concepts you've already learned. You now just need to practice and creatively apply everything you've learned so far.

**Once you've completed the Mod 5 project, you are officially a Full Stack Developer**