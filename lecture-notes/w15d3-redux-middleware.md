# Redux Thunk

So far you have been using the Redux architecture with simple imports. This does not reflect real world scenarios and today you will learn Redux with network requests. 

We don't necessarily need to incorporate thunks in Redux just to use the library. Action creators being dispatched when a component fetch resolves is just fine in a simple Redux application. However, many Redux users incorporate Thunk Action Creator middleware for a more modern and sustainable Redux implementation. For seasoned devs, additional complexity from middleware is not a big deal and a normal occurrence. For juniors and students, additional middleware can be a daunting new thing to learn. Try to pay as much attention to the Thunks lecture as possible and ask questions to help clear up blocked concepts. 

Thunks allow a function to be inserted into the normal Redux control flow. Before thunks, control flow roughly followed this invocation order: 

`action creator -> dispatch -> reducers -> selectors -> rerenders`

With thunk middleware incorporated, additional functions get invoked:

`outer thunk function -> dispatch -> inner thunk function -> request to api -> action creator -> dispatch -> reducers -> selectors -> rerenders`

As we can observe, thunks are meant to be called before normal action creators. We use them as utility functions to execute tasks ***before*** we run reducers to change state. A great way to use them is to fetch data from an api that would then go into your normal action creator. This is the most common use case of a thunk.

Because dispatch, behind the scenes, will pass itself into the thunk function and invoke it, we have access to the dispatch pointer within the thunk. This allows us to chain as many thunks as necessary before passing in a normal action to run the reducers. Keep this idea in mind. We will need to remember it during the Mod 5 project.

- your notes here