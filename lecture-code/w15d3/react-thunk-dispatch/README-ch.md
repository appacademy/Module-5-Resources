# Practice: Dispatch Thunk Actions

In this practice, you will dispatch the thunks returned from the thunk action
creators you wrote in the previous practice.

## Setup

Clone the starter repo accessible from the `Download Project` button at the
bottom of this page.

1. In the terminal, `cd` into the __backend-rails__ directory.
2. Install dependencies with `bundle install`.
3. Run `rails db:setup` to set up the database.
4. Run `rails s` to start the backend server listening on port 5000.

In a different terminal, `cd` into the __frontend__ directory of the starter.

1. Run `npm install` in the __frontend__ directory.
2. Run `npm run dev` in the __frontend__ directory to start the server.
   * Note that __frontend/vite.config.js__ now defines a proxy of
     `http://localhost:5000` for any path beginning with `/api`. This will
     effectively forward any `/api` requests to the port (`5000`) on which your
     backend is listening.
3. Open [`http://localhost:5173`] to see the frontend.

[`http://localhost:5173`]: http://localhost:5173

## Dispatching thunk actions: `fetchArticles`

In the previous practice, you wrote thunk action creators, i.e., functions that
returned a thunk action. In this practice, you will `dispatch` those thunk
actions.

In the __frontend/src/components/ArticleList/ArticleList.jsx__ file, you will
update the component from `dispatch`-ing the action returned by the regular
action creator--i.e., the old `loadArticles()`--to `dispatch`-ing the thunk
action returned from the thunk action creator. Change the `import` statement
near the top of the file to import the thunk action creator. Update the
`dispatch` call inside the `useEffect` hook to `dispatch` the returned thunk
action from the `fetchArticles` thunk action creator.

You should `dispatch` your thunk actions the same way you `dispatch`-ed the
actions returned from your action creators, using the same `dispatch` made
available in your application through the `useDispatch` hook.

Once you finish, your code should look something like this:

```js
import { fetchArticles } from '../../store/articleReducer';

const ArticleList = () => {
  const dispatch = useDispatch();
  const articles = useSelector(state=>state.articleState.entries);

  useEffect(() => {
    dispatch(fetchArticles());
  }, [dispatch]);
  // ...
};
```

## Test and debug

You ended the last practice with a broken app because you were no longer loading
the articles. Now that you are fetching the articles, test your code in the
browser again. You should see the "Article List" displaying the various titles
once again. Yea!

Now click on one of the titles. You will probably see a blank screen with the
DevTools console shouting at you because `SingleArticle` is trying to access
inside of `undefined`. In short, `SingleArticle` can't find the article it
is supposed to display. Fix this problem in the `SingleArticle` component.

> **Hint:** the database assigns integer `id`s rather than the string `id`s
> assigned by `nanoid`.

Once you get `SingleArticle` to render again, refresh the page. Oh no! It's
(likely) broken again. Check the state in the Redux DevTools:
`articleState.entries` should be empty. The refresh clears the Redux store, but
why doesn't the app just re-fetch the articles?

Take a look in __ArticleList/ArticleList.jsx__. Notice that you fetch the articles in a
`useEffect`, and a `useEffect` always runs **after** a render. In other words,
your app will always render at least once before it fetches the articles. It's
this first render that's the problem: there are no articles loaded for
`SingleArticle` to grab. To fix this, use some kind of conditional to make sure
that `SingleArticle` doesn't try to render `singleArticle`--note the lowercase
's'--if there is no article to display. (There are several ways this could be
done; just pick one.)

Once `SingleArticle` makes it through the first render, the `useEffect` will
run, fetch the articles, and load them into the Redux store. This updating of
the store will then trigger a re-render in which `SingleArticle` should be able
to find and display the specified article (assuming it was a valid article
request to begin with). All of this typically happens so quickly that it is hard
for the human eye to even notice that more than one render occurs!

## `writeArticle`

Now it's your turn! Update the `ArticleInput` component found in the
__frontend/src/component/ArticleInput/ArticleInput.js__ file to use the `writeArticle`
thunk action creator when the user submits the form to create a new article.

> **Tip:** The database will now assign the new article an `id`, so you will no
> longer need `nanoid`.

Note that you will want to `await` the result of your `dispatch` and only reset
the form if the article was successfully entered into the database. You can only
`await` inside an `async` function, however, so you will also need to re-define
`handleSubmit` accordingly:

```js
const handleSubmit = async (e) => {
  // ...
}
```

## What you have learned

**Congratulations!** In this practice you have learned how to

1. `dispatch` thunk actions from within your React components
2. Debug some of the issues that commonly arise when using thunks
